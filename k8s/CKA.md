# CKA (Certified Kubernetes Administrator) Study Notes

> Practice cluster: kind (local)
> Practice namespace: `cka`
> Exam: hands-on, 2 hours, ~15–20 tasks, pass score 66%

---

## Exam Domains & Weights

| Domain | Weight |
|---|---|
| Troubleshooting | 30% |
| Cluster Architecture, Installation & Configuration | 25% |
| Services & Networking | 20% |
| Workloads & Scheduling | 15% |
| Storage | 10% |

---

## Overall Study Plan (8 weeks)

| Week | Topic |
|---|---|
| 1–2 | Core Workloads (Pods, Deployments, StatefulSets, Jobs, ConfigMaps, Secrets) |
| 3 | Scheduling (affinity, taints/tolerations, static pods) |
| 4 | Storage (PV, PVC, StorageClass) |
| 5 | Networking (Services, Ingress, NetworkPolicy, DNS) |
| 6 | Cluster Architecture & Security (RBAC, kubeadm, etcd backup) |
| 7–8 | Troubleshooting (nodes, pods, services, control plane) |

---

## Essential kubectl Commands (must be fast)

```bash
# Generate YAML without applying — fastest way to create manifests
kubectl run nginx --image=nginx --dry-run=client -o yaml > pod.yaml
kubectl create deployment nginx --image=nginx --dry-run=client -o yaml > deploy.yaml
kubectl create service clusterip my-svc --tcp=80:80 --dry-run=client -o yaml

# Common get/describe
kubectl get pods -A
kubectl get pods -n cka -o wide
kubectl describe pod <name> -n cka
kubectl logs <pod> -n cka
kubectl logs <pod> -n cka --previous     # crashed pod
kubectl exec -it <pod> -n cka -- sh

# Rollout
kubectl rollout status deployment/<name> -n cka
kubectl rollout undo deployment/<name> -n cka
kubectl rollout history deployment/<name> -n cka

# Scale
kubectl scale deployment <name> --replicas=3 -n cka

# Copy files
kubectl cp <pod>:/path/to/file ./local -n cka

# Resource usage
kubectl top node
kubectl top pod -n cka

# RBAC check
kubectl auth can-i create pods --as=system:serviceaccount:cka:mysa -n cka
```

---

## Troubleshooting Flow (30% of exam — most important)

```
pod stuck / not starting?
  └─ kubectl get pods -A                    # spot the problem
  └─ kubectl describe pod <name>            # read Events section
       ├─ unbound PVC          → kubectl get pvc; kubectl get storageclass
       ├─ ImagePullBackOff     → wrong image name or registry auth
       ├─ Insufficient cpu/mem → kubectl describe node
       ├─ CrashLoopBackOff     → kubectl logs <pod> --previous
       └─ FailedScheduling     → taints, affinity, resource limits

service not reachable?
  └─ kubectl get endpoints <svc>            # empty = selector mismatch
  └─ kubectl describe svc <svc>            # check selector labels
  └─ kubectl get pods --show-labels        # verify pod labels match

node NotReady?
  └─ kubectl describe node <name>          # check Conditions + Events
  └─ ssh into node → systemctl status kubelet
  └─ journalctl -u kubelet -n 50
```

---

## Week 1–2: Core Workloads

### Pods

```bash
# Create a pod imperatively
kubectl run nginx --image=nginx -n cka

# Pod with resource limits
kubectl run nginx --image=nginx -n cka --dry-run=client -o yaml | \
  kubectl set resources --local -f - --requests=cpu=100m,memory=128Mi -o yaml

# Multi-container pod — must use YAML
```

Key concepts:
- Pod lifecycle: Pending → Running → Succeeded/Failed
- `restartPolicy`: Always (default), OnFailure, Never
- `terminationGracePeriodSeconds`
- Init containers: run to completion before main container starts
- Sidecar containers: run alongside main container (logs, proxies)

**Init container example:**
```yaml
apiVersion: v1
kind: Pod
metadata:
  name: init-demo
  namespace: cka
spec:
  initContainers:
  - name: init-myservice
    image: busybox
    command: ['sh', '-c', 'echo init done']
  containers:
  - name: app
    image: nginx
```

**Multi-container (sidecar) example:**
```yaml
apiVersion: v1
kind: Pod
metadata:
  name: sidecar-demo
  namespace: cka
spec:
  containers:
  - name: app
    image: nginx
    volumeMounts:
    - name: shared-logs
      mountPath: /var/log/nginx
  - name: log-sidecar
    image: busybox
    command: ['sh', '-c', 'tail -f /logs/access.log']
    volumeMounts:
    - name: shared-logs
      mountPath: /logs
  volumes:
  - name: shared-logs
    emptyDir: {}
```

---

### Deployments

```bash
# Create
kubectl create deployment web --image=nginx --replicas=3 -n cka

# Update image (triggers rolling update)
kubectl set image deployment/web nginx=nginx:1.25 -n cka

# Check rollout
kubectl rollout status deployment/web -n cka

# Rollback
kubectl rollout undo deployment/web -n cka

# Scale
kubectl scale deployment web --replicas=5 -n cka
```

Key concepts:
- `RollingUpdate` strategy: `maxSurge`, `maxUnavailable`
- `Recreate` strategy: kills all pods then recreates (downtime)
- `minReadySeconds`: how long pod must be ready before considered available
- Revision history: `kubectl rollout history deployment/web`

**Deployment with rolling update config:**
```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: web
  namespace: cka
spec:
  replicas: 3
  strategy:
    type: RollingUpdate
    rollingUpdate:
      maxSurge: 1
      maxUnavailable: 0
  selector:
    matchLabels:
      app: web
  template:
    metadata:
      labels:
        app: web
    spec:
      containers:
      - name: web
        image: nginx:1.25
        resources:
          requests:
            cpu: 100m
            memory: 128Mi
          limits:
            cpu: 200m
            memory: 256Mi
```

---

### StatefulSets

Key differences from Deployments:
- Pods get stable, ordered names: `web-0`, `web-1`, `web-2`
- Pods start and stop in order (`OrderedReady` policy)
- Each pod gets its own PVC via `volumeClaimTemplates`
- Requires a **headless service** (`clusterIP: None`) for stable DNS

DNS pattern per pod: `<pod-name>.<service-name>.<namespace>.svc.cluster.local`

```bash
kubectl get sts -n cka
kubectl describe sts <name> -n cka
```

> Lesson learned: `storageClassName` in `volumeClaimTemplates` must match an existing StorageClass.
> In kind, use `standard` (rancher.io/local-path). `kubectl get storageclass` to verify.

---

### DaemonSets

- Runs **one pod per node** automatically
- Use cases: log collectors (fluentd), monitoring agents (node-exporter), CNI plugins
- Tolerates control-plane taint by default if needed

```yaml
apiVersion: apps/v1
kind: DaemonSet
metadata:
  name: log-collector
  namespace: cka
spec:
  selector:
    matchLabels:
      app: log-collector
  template:
    metadata:
      labels:
        app: log-collector
    spec:
      containers:
      - name: fluentd
        image: fluent/fluentd
```

---

### Jobs & CronJobs

**Job** — runs a pod to completion once:
```yaml
apiVersion: batch/v1
kind: Job
metadata:
  name: pi
  namespace: cka
spec:
  completions: 3        # run 3 successful completions
  parallelism: 2        # run 2 at a time
  template:
    spec:
      restartPolicy: OnFailure
      containers:
      - name: pi
        image: perl
        command: ["perl", "-Mbignum=bpi", "-wle", "print bpi(100)"]
```

**CronJob** — scheduled job:
```yaml
apiVersion: batch/v1
kind: CronJob
metadata:
  name: hello
  namespace: cka
spec:
  schedule: "*/1 * * * *"
  jobTemplate:
    spec:
      template:
        spec:
          restartPolicy: OnFailure
          containers:
          - name: hello
            image: busybox
            command: ["echo", "hello"]
```

```bash
kubectl get jobs -n cka
kubectl get cronjobs -n cka
kubectl logs job/pi -n cka
```

---

### ConfigMaps & Secrets

**ConfigMap — use as env vars:**
```bash
kubectl create configmap app-config --from-literal=ENV=production --from-literal=PORT=8080 -n cka
```

```yaml
envFrom:
- configMapRef:
    name: app-config
# or single key:
env:
- name: ENV
  valueFrom:
    configMapKeyRef:
      name: app-config
      key: ENV
```

**ConfigMap — use as volume (file mount):**
```yaml
volumes:
- name: config-vol
  configMap:
    name: app-config
volumeMounts:
- name: config-vol
  mountPath: /etc/config
```

**Secret:**
```bash
kubectl create secret generic db-secret \
  --from-literal=username=admin \
  --from-literal=password=s3cret \
  -n cka
```

```yaml
env:
- name: DB_PASSWORD
  valueFrom:
    secretKeyRef:
      name: db-secret
      key: password
```

> Secrets are base64-encoded, not encrypted by default. In production, use encryption at rest or external secret managers.

---

## Resources

| Resource | URL |
|---|---|
| Kubernetes docs (allowed in exam) | https://kubernetes.io/docs |
| killer.sh simulator (free with exam) | https://killer.sh |
| KodeKloud CKA course | https://kodekloud.com |

---

## Internals Log

### 2026-10-05
- Created `cka` namespace in kind cluster
- Debugged StatefulSet with missing StorageClass (`my-storage-class` → `standard`)
- Set up this CKA.md study guide
