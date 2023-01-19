pipeline {
    agent any
    environment {
        IMAGE = "ikegabriel/node-server"
        TAG = "$BUILD_ID"
        CONTAINER_NAME = "jenktestrun"
    }
    stages{
        stage('Log') {
            steps {
                sh 'ls -la'
                sh 'echo ${TAG}'
            }
        }
        // stage('Build Image') {
        //     steps {
        //         sh 'docker build -t node-server:${env.BUILD_ID} .'
        //     }
        // }
    
        // stage('Run Docker Container') {
        //     steps {
        //         sh 'docker run --rm --name jenktestrun -p 8800:8000 ${IMAGE}:${TAG}&'
        //         sh 'curl host.docker.internal:8800'
        //         sh 'docker stop ${CONTAINER_NAME}'
        //     }
        // }
    }    
}