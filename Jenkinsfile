/* Scalable Services assignment */

/* build in Master node */
//node{
/* build in Slave node*/
node('Slave') {
   
   
   stage('Setup parameters') {
   
	   try {
		  
		  
		  
		  sh 'echo "Setup Parameter..." '
		  
		}catch (err) {
        echo "Caught: ${err}"
        currentBuild.result = 'FAILURE'
		}
	
   }

   stage('Checkout Code') { 
     
	 try {
	  checkout scm
	 }catch (err) {
	  echo "Caught: ${err}"
	  currentBuild.result = 'FAILURE'
	 }
	 
   }
   
   stage('Maven Test') {
   
		try {
		  if (isUnix()) {
			 
			 sh 'echo "Maven Test..."'
			 sh 'pwd'
			 sh 'ls -ltr'
			 //sh '/opt/apache-maven-3.8.5/bin/mvn clean test'
			 
		   } else {
			 //bat(/"mvn" clean test/)
		   }
		   
		}catch (err) {
		 echo "Caught: ${err}"
		 currentBuild.result = 'FAILURE'
	    }
	  
   }
}