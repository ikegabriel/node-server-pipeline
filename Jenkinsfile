pipeline {
    agent any
    environment {
        IMAGE = "node-server"
        TAG = "$BUILD_ID"
        CONTAINER_NAME = "node-server-test"
    }
    stages{
        stage('Log') {
            steps {
                sh 'ls -la'
                sh 'echo ${TAG}'
            }
        }
        stage('Build Image') {
//             agent {
//                 docker {}
//             }
            steps {
                sh 'docker build -t node-server:${TAG} .'
            }
        }
    
        stage('Test Build') {
            steps {
                sh 'docker run --rm --name ${CONTAINER_NAME} -d -p 8800:8000 ${IMAGE}:${TAG}'
                sh 'bash server-test.sh'
                sh 'docker stop ${CONTAINER_NAME}'
            }
        }
    }    
}
