pipeline {
   agent any
    environment {
        gitURL = 'https://perezjuang:86100252807aA*@github.com/pablopac/gestionIngresoIUE.git'
        branchDEV = 'dev'
        branchQA= 'qa'
        branchPRD = 'master'
    }
   stages {
      stage('GET_CODE') {
         steps {
           catchError(buildResult: 'SUCCESS', stageResult: 'SUCCESS')
            {
                        bat  """
                              mkdir DEV
                             """.stripIndent().trim()

            }    
            dir ('DEV') {  
               git branch: env.branchPRD, url: env.gitURL
                            
            }
         }

         }
      }
   }
