# Helm

## Helm on minikube

```bash

curl https://baltocdn.com/helm/signing.asc | gpg --dearmor | sudo tee /usr/share/keyrings/helm.gpg > /dev/null
sudo apt-get install apt-transport-https --yes
echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/helm.gpg] https://baltocdn.com/helm/stable/debian/ all main" | sudo tee /etc/apt/sources.list.d/helm-stable-debian.list

sudo apt-get update
sudo apt-get install helm

helm repo add prometheus-community https://prometheus-community.github.io/helm-charts
helm search repo prometheus-community
helm repo update
# Install Chart
helm install [RELEASE_NAME] prometheus-community/prometheus-pushgateway
helm install first prometheus-community/prometheus-pushgateway

NAME: first
LAST DEPLOYED: Sun May 26 20:37:38 2024
NAMESPACE: default
STATUS: deployed
REVISION: 1
TEST SUITE: None
NOTES:
1. Get the application URL by running these commands:
  export POD_NAME=$(kubectl get pods --namespace default -l "app.kubernetes.io/name=prometheus-pushgateway,app.kubernetes.io/instance=first" -o jsonpath="{.items[0].metadata.name}")
  kubectl port-forward $POD_NAME 9091
  echo "Visit http://127.0.0.1:9091 to use your application"

export POD_NAME=$(kubectl get pods --namespace default -l "app.kubernetes.io/name=prometheus-pushgateway,app.kubernetes.io/instance=first" -o jsonpath="{.items[0].metadata.name}")
kubectl port-forward $POD_NAME 9091
curl http://127.0.0.1:9091

helm list


NAME 	NAMESPACE	REVISION	UPDATED                                 	STATUS  	CHART                        	APP VERSION
first	default  	1       	2024-05-26 20:37:38.565029695 +0200 CEST	deployed	prometheus-pushgateway-2.12.0	v1.8.0

helm delete first
release "first" uninstalled


To remove the old duplicate Grafana:
helm uninstall my-grafana -n monitoring

Then confirm only one Grafana remains:
kubectl get pods -n monitoring | grep grafana

```
