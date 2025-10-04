# Prometheus

```bash
helm repo add prometheus-community https://prometheus-community.github.io/helm-charts
helm repo update
helm install [RELEASE_NAME] prometheus-community/prometheus
helm install prometheus prometheus-community/prometheus

helm install prometheus prometheus-community/prometheus
NAME: prometheus
LAST DEPLOYED: Mon May 27 00:17:37 2024
NAMESPACE: default
STATUS: deployed
REVISION: 1
TEST SUITE: None
NOTES:
The Prometheus server can be accessed via port 80 on the following DNS name from within your cluster:
prometheus-server.default.svc.cluster.local


Get the Prometheus server URL by running these commands in the same shell:
  export POD_NAME=$(kubectl get pods --namespace default -l "app.kubernetes.io/name=prometheus,app.kubernetes.io/instance=prometheus" -o jsonpath="{.items[0].metadata.name}")
  kubectl --namespace default port-forward $POD_NAME 9090


The Prometheus alertmanager can be accessed via port 9093 on the following DNS name from within your cluster:
prometheus-alertmanager.default.svc.cluster.local


Get the Alertmanager URL by running these commands in the same shell:
  export POD_NAME=$(kubectl get pods --namespace default -l "app.kubernetes.io/name=alertmanager,app.kubernetes.io/instance=prometheus" -o jsonpath="{.items[0].metadata.name}")
  kubectl --namespace default port-forward $POD_NAME 9093
#################################################################################
######   WARNING: Pod Security Policy has been disabled by default since    #####
######            it deprecated after k8s 1.25+. use                        #####
######            (index .Values "prometheus-node-exporter" "rbac"          #####
###### .          "pspEnabled") with (index .Values                         #####
######            "prometheus-node-exporter" "rbac" "pspAnnotations")       #####
######            in case you still need it.                                #####
#################################################################################


The Prometheus PushGateway can be accessed via port 9091 on the following DNS name from within your cluster:
prometheus-prometheus-pushgateway.default.svc.cluster.local


Get the PushGateway URL by running these commands in the same shell:
  export POD_NAME=$(kubectl get pods --namespace default -l "app=prometheus-pushgateway,component=pushgateway" -o jsonpath="{.items[0].metadata.name}")
  kubectl --namespace default port-forward $POD_NAME 9091

For more information on running Prometheus, visit:
https://prometheus.io/


# List pods
kubectl get pods
NAME                                                 READY   STATUS    RESTARTS   AGE
prometheus-alertmanager-0                            1/1     Running   0          59s
prometheus-kube-state-metrics-76fc9c6f55-qss69       1/1     Running   0          59s
prometheus-prometheus-node-exporter-782m8            1/1     Running   0          59s
prometheus-prometheus-pushgateway-7c758897fd-h24mr   1/1     Running   0          59s
prometheus-server-55768b86b9-djvxr                   1/2     Running   0          59s

# Get prometheus Server URL
export PROM_SERVER_POD_NAME=$(kubectl get pods --namespace default -l "app.kubernetes.io/name=prometheus,app.kubernetes.io/instance=prometheus" -o jsonpath="{.items[0].metadata.name}")
kubectl --namespace default port-forward $PROM_SERVER_POD_NAME 9090
# on another terminal
curl localhost:9090/metrics


# Alert Manager
export PROM_ALERT_MANAGER_POD_NAME=$(kubectl get pods --namespace default -l "app.kubernetes.io/name=alertmanager,app.kubernetes.io/instance=prometheus" -o jsonpath="{.items[0].metadata.name}")
kubectl --namespace default port-forward $PROM_ALERT_MANAGER_POD_NAME 9093
curl localhost:9093

# Push Gateway
export PROM_PUSH_GATEWAY_POD_NAME=$(kubectl get pods --namespace default -l "app.kubernetes.io/instance=prometheus,app.kubernetes.io/name=prometheus-pushgateway" -o jsonpath="{.items[0].metadata.name}")
kubectl --namespace default port-forward $PROM_PUSH_GATEWAY_POD_NAME 9091
curl localhost:9091



## ssh in to pod
kubectl exec -it prometheus-server-55768b86b9-djvxr -c prometheus-server -- /bin/sh

# on prometheus server pod

# prometheus server
nc -vz prometheus-server.default.svc.cluster.local 80
prometheus-server.default.svc.cluster.local (10.99.87.90:80) open

# prometheus alertmanager
nc -vz prometheus-alertmanager.default.svc.cluster.local 9093
prometheus-alertmanager.default.svc.cluster.local (10.111.237.91:9093) open

nc -vz prometheus-prometheus-pushgateway.default.svc.cluster.local 9091
prometheus-prometheus-pushgateway.default.svc.cluster.local (10.98.154.24:9091) open

/prometheus $ find / -name prometheus.yml

/etc/config/prometheus.yml
/etc/config/..2024_05_26_22_17_38.1047688775/prometheus.yml
/etc/prometheus/prometheus.yml

cat /etc/config/prometheus.yml
global:
  evaluation_interval: 1m
  scrape_interval: 1m
  scrape_timeout: 10s
rule_files:
- /etc/config/recording_rules.yml
- /etc/config/alerting_rules.yml
- /etc/config/rules
- /etc/config/alerts
scrape_configs:
- job_name: prometheus
  static_configs:
  - targets:
    - localhost:9090
- bearer_token_file: /var/run/secrets/kubernetes.io/serviceaccount/token
  job_name: kubernetes-apiservers
  kubernetes_sd_configs:
  - role: endpoints
  relabel_configs:
  - action: keep
    regex: default;kubernetes;https
    source_labels:
    - __meta_kubernetes_namespace
    - __meta_kubernetes_service_name
    - __meta_kubernetes_endpoint_port_name
  scheme: https
  tls_config:
    ca_file: /var/run/secrets/kubernetes.io/serviceaccount/ca.crt
    insecure_skip_verify: true
- bearer_token_file: /var/run/secrets/kubernetes.io/serviceaccount/token
  job_name: kubernetes-nodes
  kubernetes_sd_configs:
  - role: node
  relabel_configs:
  - action: labelmap
    regex: __meta_kubernetes_node_label_(.+)
  - replacement: kubernetes.default.svc:443
    target_label: __address__
  - regex: (.+)
    replacement: /api/v1/nodes/$1/proxy/metrics
    source_labels:
    - __meta_kubernetes_node_name
    target_label: __metrics_path__
  scheme: https
  tls_config:
    ca_file: /var/run/secrets/kubernetes.io/serviceaccount/ca.crt
    insecure_skip_verify: true
- bearer_token_file: /var/run/secrets/kubernetes.io/serviceaccount/token
  job_name: kubernetes-nodes-cadvisor
  kubernetes_sd_configs:
  - role: node
  relabel_configs:
  - action: labelmap
    regex: __meta_kubernetes_node_label_(.+)
  - replacement: kubernetes.default.svc:443
    target_label: __address__
  - regex: (.+)
    replacement: /api/v1/nodes/$1/proxy/metrics/cadvisor
    source_labels:
    - __meta_kubernetes_node_name
    target_label: __metrics_path__
  scheme: https
  tls_config:
    ca_file: /var/run/secrets/kubernetes.io/serviceaccount/ca.crt
    insecure_skip_verify: true
- honor_labels: true
  job_name: kubernetes-service-endpoints
  kubernetes_sd_configs:
  - role: endpoints
  relabel_configs:
  - action: keep
    regex: true
    source_labels:
    - __meta_kubernetes_service_annotation_prometheus_io_scrape
  - action: drop
    regex: true
    source_labels:
    - __meta_kubernetes_service_annotation_prometheus_io_scrape_slow
  - action: replace
    regex: (https?)
    source_labels:
    - __meta_kubernetes_service_annotation_prometheus_io_scheme
    target_label: __scheme__
  - action: replace
    regex: (.+)
    source_labels:
    - __meta_kubernetes_service_annotation_prometheus_io_path
    target_label: __metrics_path__
  - action: replace
    regex: (.+?)(?::\d+)?;(\d+)
    replacement: $1:$2
    source_labels:
    - __address__
    - __meta_kubernetes_service_annotation_prometheus_io_port
    target_label: __address__
  - action: labelmap
    regex: __meta_kubernetes_service_annotation_prometheus_io_param_(.+)
    replacement: __param_$1
  - action: labelmap
    regex: __meta_kubernetes_service_label_(.+)
  - action: replace
    source_labels:
    - __meta_kubernetes_namespace
    target_label: namespace
  - action: replace
    source_labels:
    - __meta_kubernetes_service_name
    target_label: service
  - action: replace
    source_labels:
    - __meta_kubernetes_pod_node_name
    target_label: node
- honor_labels: true
  job_name: kubernetes-service-endpoints-slow
  kubernetes_sd_configs:
  - role: endpoints
  relabel_configs:
  - action: keep
    regex: true
    source_labels:
    - __meta_kubernetes_service_annotation_prometheus_io_scrape_slow
  - action: replace
    regex: (https?)
    source_labels:
    - __meta_kubernetes_service_annotation_prometheus_io_scheme
    target_label: __scheme__
  - action: replace
    regex: (.+)
    source_labels:
    - __meta_kubernetes_service_annotation_prometheus_io_path
    target_label: __metrics_path__
  - action: replace
    regex: (.+?)(?::\d+)?;(\d+)
    replacement: $1:$2
    source_labels:
    - __address__
    - __meta_kubernetes_service_annotation_prometheus_io_port
    target_label: __address__
  - action: labelmap
    regex: __meta_kubernetes_service_annotation_prometheus_io_param_(.+)
    replacement: __param_$1
  - action: labelmap
    regex: __meta_kubernetes_service_label_(.+)
  - action: replace
    source_labels:
    - __meta_kubernetes_namespace
    target_label: namespace
  - action: replace
    source_labels:
    - __meta_kubernetes_service_name
    target_label: service
  - action: replace
    source_labels:
    - __meta_kubernetes_pod_node_name
    target_label: node
  scrape_interval: 5m
  scrape_timeout: 30s
- honor_labels: true
  job_name: prometheus-pushgateway
  kubernetes_sd_configs:
  - role: service
  relabel_configs:
  - action: keep
    regex: pushgateway
    source_labels:
    - __meta_kubernetes_service_annotation_prometheus_io_probe
- honor_labels: true
  job_name: kubernetes-services
  kubernetes_sd_configs:
  - role: service
  metrics_path: /probe
  params:
    module:
    - http_2xx
  relabel_configs:
  - action: keep
    regex: true
    source_labels:
    - __meta_kubernetes_service_annotation_prometheus_io_probe
  - source_labels:
    - __address__
    target_label: __param_target
  - replacement: blackbox
    target_label: __address__
  - source_labels:
    - __param_target
    target_label: instance
  - action: labelmap
    regex: __meta_kubernetes_service_label_(.+)
  - source_labels:
    - __meta_kubernetes_namespace
    target_label: namespace
  - source_labels:
    - __meta_kubernetes_service_name
    target_label: service
- honor_labels: true
  job_name: kubernetes-pods
  kubernetes_sd_configs:
  - role: pod
  relabel_configs:
  - action: keep
    regex: true
    source_labels:
    - __meta_kubernetes_pod_annotation_prometheus_io_scrape
  - action: drop
    regex: true
    source_labels:
    - __meta_kubernetes_pod_annotation_prometheus_io_scrape_slow
  - action: replace
    regex: (https?)
    source_labels:
    - __meta_kubernetes_pod_annotation_prometheus_io_scheme
    target_label: __scheme__
  - action: replace
    regex: (.+)
    source_labels:
    - __meta_kubernetes_pod_annotation_prometheus_io_path
    target_label: __metrics_path__
  - action: replace
    regex: (\d+);(([A-Fa-f0-9]{1,4}::?){1,7}[A-Fa-f0-9]{1,4})
    replacement: '[$2]:$1'
    source_labels:
    - __meta_kubernetes_pod_annotation_prometheus_io_port
    - __meta_kubernetes_pod_ip
    target_label: __address__
  - action: replace
    regex: (\d+);((([0-9]+?)(\.|$)){4})
    replacement: $2:$1
    source_labels:
    - __meta_kubernetes_pod_annotation_prometheus_io_port
    - __meta_kubernetes_pod_ip
    target_label: __address__
  - action: labelmap
    regex: __meta_kubernetes_pod_annotation_prometheus_io_param_(.+)
    replacement: __param_$1
  - action: labelmap
    regex: __meta_kubernetes_pod_label_(.+)
  - action: replace
    source_labels:
    - __meta_kubernetes_namespace
    target_label: namespace
  - action: replace
    source_labels:
    - __meta_kubernetes_pod_name
    target_label: pod
  - action: drop
    regex: Pending|Succeeded|Failed|Completed
    source_labels:
    - __meta_kubernetes_pod_phase
  - action: replace
    source_labels:
    - __meta_kubernetes_pod_node_name
    target_label: node
- honor_labels: true
  job_name: kubernetes-pods-slow
  kubernetes_sd_configs:
  - role: pod
  relabel_configs:
  - action: keep
    regex: true
    source_labels:
    - __meta_kubernetes_pod_annotation_prometheus_io_scrape_slow
  - action: replace
    regex: (https?)
    source_labels:
    - __meta_kubernetes_pod_annotation_prometheus_io_scheme
    target_label: __scheme__
  - action: replace
    regex: (.+)
    source_labels:
    - __meta_kubernetes_pod_annotation_prometheus_io_path
    target_label: __metrics_path__
  - action: replace
    regex: (\d+);(([A-Fa-f0-9]{1,4}::?){1,7}[A-Fa-f0-9]{1,4})
    replacement: '[$2]:$1'
    source_labels:
    - __meta_kubernetes_pod_annotation_prometheus_io_port
    - __meta_kubernetes_pod_ip
    target_label: __address__
  - action: replace
    regex: (\d+);((([0-9]+?)(\.|$)){4})
    replacement: $2:$1
    source_labels:
    - __meta_kubernetes_pod_annotation_prometheus_io_port
    - __meta_kubernetes_pod_ip
    target_label: __address__
  - action: labelmap
    regex: __meta_kubernetes_pod_annotation_prometheus_io_param_(.+)
    replacement: __param_$1
  - action: labelmap
    regex: __meta_kubernetes_pod_label_(.+)
  - action: replace
    source_labels:
    - __meta_kubernetes_namespace
    target_label: namespace
  - action: replace
    source_labels:
    - __meta_kubernetes_pod_name
    target_label: pod
  - action: drop
    regex: Pending|Succeeded|Failed|Completed
    source_labels:
    - __meta_kubernetes_pod_phase
  - action: replace
    source_labels:
    - __meta_kubernetes_pod_node_name
    target_label: node
  scrape_interval: 5m
  scrape_timeout: 30s
alerting:
  alertmanagers:
  - kubernetes_sd_configs:
      - role: pod
    tls_config:
      ca_file: /var/run/secrets/kubernetes.io/serviceaccount/ca.crt
    bearer_token_file: /var/run/secrets/kubernetes.io/serviceaccount/token
    relabel_configs:
    - source_labels: [__meta_kubernetes_namespace]
      regex: default
      action: keep
    - source_labels: [__meta_kubernetes_pod_label_app_kubernetes_io_instance]
      regex: prometheus
      action: keep
    - source_labels: [__meta_kubernetes_pod_label_app_kubernetes_io_name]
      regex: alertmanager
      action: keep
    - source_labels: [__meta_kubernetes_pod_container_port_number]
      regex: "9093"
      action: keep

/prometheus $ cat /etc/prometheus/prometheus.yml
# my global config
global:
  scrape_interval: 15s # Set the scrape interval to every 15 seconds. Default is every 1 minute.
  evaluation_interval: 15s # Evaluate rules every 15 seconds. The default is every 1 minute.
  # scrape_timeout is set to the global default (10s).

# Alertmanager configuration
alerting:
  alertmanagers:
    - static_configs:
        - targets:
          # - alertmanager:9093

# Load rules once and periodically evaluate them according to the global 'evaluation_interval'.
rule_files:
  # - "first_rules.yml"
  # - "second_rules.yml"

# A scrape configuration containing exactly one endpoint to scrape:
# Here it's Prometheus itself.
scrape_configs:
  # The job name is added as a label `job=<job_name>` to any timeseries scraped from this config.
  - job_name: "prometheus"

    # metrics_path defaults to '/metrics'
    # scheme defaults to 'http'.

    static_configs:
      - targets: ["localhost:9090"]



helm uninstall [RELEASE_NAME]
helm upgrade [RELEASE_NAME] prometheus-community/prometheus --install


```
