pipeline {
    agent any
    environment {
        IMAGE = "ikegabriel/node-server"
        CONTAINER_NAME = "jenktestrun"
    }
    stages{
        // stage('Checkout Code') {
        //     steps {
        //         git(url: 'https://github.com/ikegabriel/node-server-pipeline', branch: 'main')
        //     }
        // }
        stage('Log') {
            steps {
                sh 'ls -la'
            }
        }
        // stage('Build Image') {
        //     steps {
        //         sh 'docker build -t node-server:${TAG} .'
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