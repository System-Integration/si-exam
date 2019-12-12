Difference between **Service** and **Deployment** ❯

**Deployment** is responsible for keeping a set of pods running.  
**Service** is responsible for enabling network access to a set of pods. 

```yaml
apiVersion: v1
kind: Service                       # Service // Job // Deployment
metadata:                           #Metadata is used for others to look up this service with name
  name: backend-cluster-ip-service  #Name is the lookup name
                                    #Label is used for identification within kubernetes
spec:                               #Specfications
  type: ClusterIP                   #What type 
  selector:
    component: server               #Specifices what kinda deployment it is
  ports:
    - port: 8080
      targetPort: 8080
```

## Example of how kubernetes works ❯

![gif](https://matthewpalmer.net/kubernetes-app-developer/articles/service-route.gif)

![yse](https://matthewpalmer.net/kubernetes-app-developer/articles/service-annotated.png)