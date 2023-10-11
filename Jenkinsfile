pipeline {
  environment{
    NPM_CONFIG_CACHE = "${WORKSPACE}/.npm"
    AWS_ACCOUNT_ID="284637488727"
    AWS_DEFAULT_REGION="us-west-2" 
    IMAGE_REPO_NAME="workbud-ms-auth" 
    IMAGE_TAG="latest"
    REPOSITORY_URI = "${AWS_ACCOUNT_ID}.dkr.ecr.${AWS_DEFAULT_REGION}.amazonaws.com/${IMAGE_REPO_NAME}"
  }
  agent any 
  stages {
    stage('Logging into AWS ECR') {
      steps {
        script {
          sh "aws ecr get-login-password --region ${AWS_DEFAULT_REGION} | docker login --username AWS --password-stdin ${AWS_ACCOUNT_ID}.dkr.ecr.${AWS_DEFAULT_REGION}.amazonaws.com"
        } 
      }
    }
    stage('Pulling from ECR') {
      steps{ 
        script {
          sh "docker pull ${AWS_ACCOUNT_ID}.dkr.ecr.${AWS_DEFAULT_REGION}.amazonaws.com/${IMAGE_REPO_NAME}:${IMAGE_TAG}"
        }
      }
    }
    stage('install playwright'){
      agent {
        docker {
          image 'mcr.microsoft.com/playwright:v1.38.0-jammy'
          args '-u root:root'
          reuseNode true
        }
      } 
      steps {
        sh '''
          npm cache clean --force
          npm install
          npm i -D @types/node
          npm i -D @playwright/test
          npx playwright install
          npx playwright install-deps  
        '''
      }
    }
    stage('test'){
      steps{
        sh '''
          npx playwright test --list
          npx playwright test
        '''
      }
    }
  }
}
