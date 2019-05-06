void setBuildStatus(String message, String state) {
  step([
      $class: "GitHubCommitStatusSetter",
      reposSource: [$class: "ManuallyEnteredRepositorySource", url: "https://github.com/SukuLab/test-library.git"],
      contextSource: [$class: "ManuallyEnteredCommitContextSource", context: "ci/jenkins/build-status"],
      errorHandlers: [[$class: "ChangingBuildStatusErrorHandler", result: "UNSTABLE"]],
      statusResultSource: [ $class: "ConditionalStatusResultSource", results: [[$class: "AnyBuildResult", message: message, state: state]] ]
  ]);
}

pipeline {
    agent { label "build" }
    stages {

        stage("slack notification") {
             steps {
                 slackSend (color: '#FFFF00', message: "STARTED: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]' (${env.BUILD_URL})")
             }
        }

        stage("checkout"){
            steps {
                checkout scm
            }
        }

        stage("static code analysis"){
            steps {
                withSonarQubeEnv('sonarqube') {
                    sh '/opt/sonar/bin/sonar-scanner -Dsonar.projectKey=test-library -Dsonar.sources=./src/app -Dsonar.exclusions=**/**/assets/**'
                }
            }
        }

        stage("build docker image") {
            steps {
                sh "docker build -t test-lib:ci_latest ."
            }
        }

        stage("run docker"){
            steps {
                sh "docker run --name gitpush_${BRANCH_NAME} -e BRANCH_NAME=${BRANCH_NAME} -e GIT_USERNAME=${GIT_USERNAME} -e EMAIL_ID=${EMAIL_ID} test-lib:ci_latest"
            }
        }
    }

    post {
        always {
             sh "docker rm -f gitpush_${BRANCH_NAME}"
             sh "docker rmi -f test-lib:ci_latest"
        }

        success {
             setBuildStatus("Build succeeded", "SUCCESS");
             slackSend (color: '#00FF00', message: "SUCCESSFUL: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]' (${env.BUILD_URL})")
        }

        failure {
             setBuildStatus("Build failed", "FAILURE");
             slackSend (color: '#FF0000', message: "FAILED: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]' (${env.BUILD_URL})")
        }
    }
}
