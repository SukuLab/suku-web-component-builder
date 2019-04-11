void setBuildStatus(String message, String state) {
  step([
      $class: "GitHubCommitStatusSetter",
      reposSource: [$class: "ManuallyEnteredRepositorySource", url: "https://github.com/SukuLab/suku-ui.git"],
      contextSource: [$class: "ManuallyEnteredCommitContextSource", context: "ci/jenkins/build-status"],
      errorHandlers: [[$class: "ChangingBuildStatusErrorHandler", result: "UNSTABLE"]],
      statusResultSource: [ $class: "ConditionalStatusResultSource", results: [[$class: "AnyBuildResult", message: message, state: state]] ]
  ]);
}

pipeline {
    agent { label "build" }
    environment {
         def ip = sh returnStdout: true, script: 'curl -s http://169.254.169.254/latest/meta-data/public-ipv4'
    }

    stages {

        /*stage("slack notification") {
             steps {
                 slackSend (color: '#FFFF00', message: "STARTED: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]' (${env.BUILD_URL})")
             }
        }*/

        stage("checkout"){
            steps {
                checkout scm
            }
        }

        stage("run tslint"){
            steps {
                sh "npm install tslint"
                sh "npm install -D typescript"
                sh "yarn global add tslint typescript"
                sh returnStatus: true, script: 'tslint -t json -o report.json --project .'
            }
        }

        stage("static code analysis"){
            steps {
                withSonarQubeEnv('sonarqube') {
                    sh '/opt/sonar/bin/sonar-scanner -Dsonar.projectKey=suku-ui -Dsonar.sources=./src/app -Dsonar.exclusions=**/**/assets/**'
                }
            }
        }

        stage("build docker image") {
            steps {
                sh "docker build -t $SUKU_DOCKER_REGISTRY/sukumarketplaceui:ci_${GIT_COMMIT} ."
            }
        }

        stage("env cleanup"){
            steps {
                sh returnStatus: true, script: 'docker rm -f sukumarketplaceui'

            }
        }

        stage("Launch service"){
            steps {
                sh "docker run -d -p 4123:80 --name sukumarketplaceui $SUKU_DOCKER_REGISTRY/sukumarketplaceui:ci_${GIT_COMMIT}"
                sh "docker logs sukumarketplaceui"
            }
        }

        stage("Launch Info"){
            steps {
                echo "http://${ip}:4123"
            }
        }

        stage("Sanity testing"){
            steps {
                sh returnStdout: true, script: 'curl -is http://${ip}:$CR_APP_SUKUMARKET_PORT | head -n1'
            }
        }

        stage("Tag and push") {
            steps {
                withDockerRegistry(credentialsId: 'b9421aa7-cd71-48d1-9a11-3c9410fd3e45', url: '') {
                    sh "docker tag ${SUKU_DOCKER_REGISTRY}/sukumarketplaceui:ci_${GIT_COMMIT} ${SUKU_DOCKER_REGISTRY}/sukumarketplaceui:${VERSION}"
                    //sh "docker push ${SUKU_DOCKER_REGISTRY}/sukumarketplaceui:${VERSION}"
                    sh "docker push ${SUKU_DOCKER_REGISTRY}/sukumarketplaceui:ci_${GIT_COMMIT}"

                }
            }
        }


        
        /*stage("code-scanning"){
            steps{
                sh "docker build -t codescan -f Dockerfile.scanner ."
                sh "docker run codescan"
            }
        }*/
         
    }

    post {
       
        success {
             setBuildStatus("Build succeeded", "SUCCESS");
            // slackSend (color: '#00FF00', message: "SUCCESSFUL: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]' (${env.BUILD_URL})")
        }

        failure {
             setBuildStatus("Build failed", "FAILURE");
             //slackSend (color: '#FF0000', message: "FAILED: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]' (${env.BUILD_URL})")
        }
    }
}
