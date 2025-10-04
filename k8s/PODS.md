# PODS

## Create Pods

## Listing Pods

```bash
kubectl get pods -A
```

## Deletion

```bash
  # Delete a pod using the type and name specified in pod.json
  kubectl delete -f ./pod.json

  # Delete resources from a directory containing kustomization.yaml - e.g. dir/kustomization.yaml
  kubectl delete -k dir

  # Delete resources from all files that end with '.json'
  kubectl delete -f '*.json'

  # Delete a pod based on the type and name in the JSON passed into stdin
  cat pod.json | kubectl delete -f -

  # Delete pods and services with same names "baz" and "foo"
  kubectl delete pod,service baz foo

  # Delete pods and services with label name=myLabel
  kubectl delete pods,services -l name=myLabel

  # Delete a pod with minimal delay
  kubectl delete pod demo --now

  # Force delete a pod on a dead node
  kubectl delete pod demo --force

  # Delete all pods
  kubectl delete pods --all
```
