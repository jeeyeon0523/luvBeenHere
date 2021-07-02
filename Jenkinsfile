pipeline {
    agent { label 'master'}
    environment {
        AWS_CRED = credentials('aws_vergilius63')
    }
    stages{
        stage('Npm install'){
            steps {
                dir('App') {
                    script{
                        sh 'npm install'
                    }
                }
            }
        }
        stage('Build app'){
            steps {
                dir('App') {
                    script{
                        sh 'CI=false npm run build'
                    }
                }
            }
        }
        stage('Upload S3'){
            steps {
                script{
                    sh 'mkdir -p ~/.aws'
                    sh """echo ${AWS_CRED} | base64 -d > ~/.aws/credentials"""
                    dir('App/build') {
                        script{
                            sh 'aws s3 sync . s3://dev.luvbeenhere.com/ --acl public-read'
                        }
                    }
                }
            }
        }
    }
}