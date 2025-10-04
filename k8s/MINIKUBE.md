```bash

# start the cluster
minikube start

# Access to dashboard
minikube dashboard

# create a deployment
kubectl create deployment hello-minikube --image=kicbase/echo-server:1.0

# Exposing a service as a NodePort
kubectl expose deployment hello-minikube --type=NodePort --port=8080

# minikube makes it easy to open this exposed endpoint in your browser:
minikube service hello-minikube

# To test connectivity to a specific TCP service listening on your host, use nc -vz host.minikube.internal <port>:
nc -vz host.minikube.internal 8000

# upgrade your cluster
minikube start --kubernetes-version=latest

# Start a second local cluster (note: This will not work if minikube is using the bare-metal/none driver):
minikube start -p cluster2

# Stop your local cluster:
minikube stop

# Delete your local cluster:
minikube delete

# Delete all local clusters and profiles
minikube delete --all

# deployments
kubectl create deployment hello-minikube1 --image=kicbase/echo-server:1.0
kubectl expose deployment hello-minikube1 --type=LoadBalancer --port=8080

# Addons
minikube addons list

# To enable an add-on, see:
minikube addons enable <name>

# To enable an addon at start-up, where –addons option can be specified multiple times:
minikube start --addons <name1> --addons <name2>

# For addons that expose a browser endpoint, you can quickly open them with:
minikube addons open <name>

# To disable an addon:
minikube addons disable <name>

```
