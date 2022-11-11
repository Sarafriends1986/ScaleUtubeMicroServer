/* Scalable Services assignment */

/* build in Master node */
//node{
/* build in Slave node*/
node('slave_A') {
   stage('Checkout Code') { 
     
	 try {
	  checkout scm
	 }catch (err) {
	  echo "Caught: ${err}"
	  currentBuild.result = 'FAILURE'
	 }
	 
   }
   stage('Docker Build') {
   
		try {
		  if (isUnix()) {
			 
			 sh 'echo "Maven Test..."'
			 sh 'pwd'
			 sh 'ls -ltr'
			 sh 'docker build -t sarafriends1986/scale-utube-micro-node:v_00.00.001 .'
			 
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
			 
			 sh 'echo "Maven Test..."'
			 sh 'pwd'
			 sh 'ls -ltr'
			 sh 'docker images sarafriends1986/scale-utube-micro-node'
			 sh 'docker push sarafriends1986/scale-utube-micro-node:v_00.00.001'
			 
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
			 
			 sh 'echo "Maven Test..."'
			 sh 'pwd'
			 sh 'ls -ltr'
			 sh 'kubectl get deployments utube-micro-deployment -o wide'
			 sh 'kubectl set image deployment/utube-micro-deployment utube-micro=sarafriends1986/scale-utube-micro-node:v_00.00.001'
			 
		   } else {
			  echo "Nothing"
		   }
		   
		}catch (err) {
		 echo "Caught: ${err}"
		 currentBuild.result = 'FAILURE'
	    }
	  
   }
}