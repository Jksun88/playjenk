pipeline {
  environment{
    NPM_CONFIG_CACHE = "${WORKSPACE}/.npm"
  }
  agent {
    docker {
      image 'mcr.microsoft.com/playwright:v1.38.0-jammy'
    }
  }
  stages {
    stage('install playwright'){
      steps {
        sh '''
          npm i -D @playwright/test
          npx playwright install
          npx playwright install-deps  
        '''
      }
    }
    stage('help'){
      steps{
        sh 'npx playwright test --help'
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