/* Scalable Services assignment Utube*/

/* build in Master node */
//node{
/* build in Slave node*/
node('slave_A') {
   stage('Checkout Code') { 
     
	 try {
	 sh 'echo "Checkout Code..."'
	  checkout scm
	 }catch (err) {
	  echo "Caught: ${err}"
	  currentBuild.result = 'FAILURE'
	 }
	 
   }
   stage('Docker Build') {
   
		try {
		  if (isUnix()) {
			 
			 sh 'echo "Docker Build..."'
			 sh 'pwd'
			 sh 'ls -ltr'
			 sh 'docker build -t sarafriends1986/scale-utube-micro-node:v_00.00.004 .'
			 
		   } else {
			  echo "Nothing"
		   }
		   
		}catch (err) {
		 echo "Caught: ${err}"
		 currentBuild.result = 'FAILURE'
	    }
	  
   }
   stage('Docker Image Upload') {
   
		try {
		  if (isUnix()) {
		  
			 sh 'echo "Docker Image Upload..."'
			 sh 'pwd'
			 sh 'ls -ltr'
			 sh 'docker images sarafriends1986/scale-utube-micro-node'
			 sh 'docker push sarafriends1986/scale-utube-micro-node:v_00.00.004'
			 
		   } else {
			   echo "Nothing"
		   }
		   
		}catch (err) {
		 echo "Caught: ${err}"
		 currentBuild.result = 'FAILURE'
	    }
	  
   }
   stage('Kubernetes Deployment') {
   
		try {
		  if (isUnix()) {
		  
			 sh 'echo "Kubernetes Deployment..."'
			 sh 'pwd'
			 sh 'ls -ltr'
			 sh 'kubectl get deployments utube-micro-deployment -o wide'
			 sh 'kubectl set image deployment/utube-micro-deployment utube-micro=sarafriends1986/scale-utube-micro-node:v_00.00.004'
			 echo "After Deploying new release version to Kubernetes..."
			 sh 'kubectl get deployments utube-micro-deployment -o wide'
			 
		   } else {
			  echo "Nothing"
		   }
		   
		}catch (err) {
		 echo "Caught: ${err}"
		 currentBuild.result = 'FAILURE'
	    }
	  
   }
}