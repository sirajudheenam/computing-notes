```bash
export KUBECONFIG="${HOME}/.kube/config"

brew install kind
kind create cluster # Default cluster context name is `kind`.
kind create cluster --name kind-2
kind get clusters
kubectl cluster-info --context kind-kind
kind delete cluster
kind load docker-image my-app:latest
kind load docker-image my-app:latest my-db:latest my-cache:latest
kind load docker-image my-app:latest --name test-cluster

docker build -t my-custom-image:unique-tag ./my-image-dir
kind load docker-image my-custom-image:unique-tag
kubectl apply -f my-manifest-using-my-image.yaml

```
