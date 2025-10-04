# K8S Notes

## Service Account

```bash
kubectl get sa -A

# If you have RBAC enabled on your cluster, use the following snippet to create role binding which will grant the default service account view permissions.
kubectl create clusterrolebinding default-view --clusterrole=view --serviceaccount=default:default

```

