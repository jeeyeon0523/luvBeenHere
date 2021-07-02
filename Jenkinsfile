pipeline {
    agent { label 'master'}
    environment {
        AWS_CRED = credentials('aws_vergilius63')
        RM_HOST = credentials('rm_host')
        RM_USER = credentials('rm_user')
        RM_PASSWD = credentials('rm_passwd')
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
                        sh 'ls'
                        sh 'mv build fe'
                    }
                }
            }
        }
        stage('Upload S3'){
            steps {
                script{
                    dir('App/fe') {
                        script{
                            def remote = [:]
                            remote.name = 'dev_server'
                            remote.host = 'localhost'
                            remote.user = RM_USER 
                            remote.password = RM_PASSWD 
                            remote.allowAnyHosts = true
                            sshCommand remote: remote, command: """rm -rf ./dev/luvbeenhere/fe"""
                            sshPut remote: remote, from: '.', into: './dev/luvbeenhere'
                        }
                    }
                }
            }
        }
    }
}