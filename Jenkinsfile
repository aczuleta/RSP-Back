pipeline {
    agent any
    environment{
        DOCKER_PASSWD = credentials('DOCKER_HUB_PASSWD')
        DOCKER_USER = credentials('DOCKER_HUB_USER')
        DB_HOST = credentials('DB_HOST')
        DB_USER = credentials('DB_USER')
        DB_PASSWD = credentials('DB_PASSWD')
        DB_DB = credentials('DB_DB')
        AWS_KEY = credentials('AWS_KEY')
        AWS_SECRET = credentials('AWS_SECRET')

    }

    stages {
        stage('Build'){
            steps {
                sh '''
 			echo "building my app"
			echo $GIT_URL
			echo $PWD
			docker build  --build-arg db_host=$DB_HOST \
            --build-arg db_user=$DB_USER --build-arg db_passwd=$DB_PASSWD --build-arg db_db =$DB_DB \
            --build-arg aws_key=$AWS_KEY --build-arg aws_key=$AWS_SECRET -t aczuleta10/rps-back . 
		   '''
            }
        }
        
        stage("Push"){
            steps{
                sh '''
                    docker login -u $DOCKER_USER -p $DOCKER_PASSWD
                    docker push aczuleta10/rps-back
                '''
            }
        }

        stage("Deploy"){
            steps{
                sh '''
                    docker run -d -p 8000:8000 --name="rps-back" aczuleta10/rps-back
                '''
            }
        }


    }
}
