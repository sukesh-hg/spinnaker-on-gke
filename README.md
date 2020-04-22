# SPINNAKER 
Spinnaker is a continuous delivery tool that aims to make it easy to enhance cloud deployment models. Spinnaker facilitates the creation of pipelines that represent a delivery process that can begin with the creation of some deployable asset (such as a machine image, Jar file, or Docker image) and end with a deployment.

PRE-REQUISITES
Google Kubernetes Cluster (to deploy Spinnaker) with Helm installed,
Google Cloud Storage bucket,
Google Cloud Reporsitory (or any docker registry),
GCP Service Account.

Install spinnaker using the stable helm chart 
./helm install -n default cd stable/spinnaker -f spinnaker-config.yaml \
           --version 1.23.0 --timeout 10m0s --wait
           
Access spinnaker using
export DECK_POD=$(kubectl get pods --namespace default -l "cluster=spin-deck" -o jsonpath="{.items[0].metadata.name}")
kubectl port-forward --namespace default $DECK_POD 9000:9000 >> /dev/null &

This repository also has Istio configuration and a set of deployment and service files which can be used to set up a sample application on another Kubernetes cluster. Use Spinnaker templates to create pipelines on Spinnaker with the Blue/Green and Canary models.
