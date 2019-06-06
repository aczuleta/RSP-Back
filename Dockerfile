FROM node:8-stretch

# Change working directory
WORKDIR "/app"

# Update packages and install dependency packages for services
RUN apt-get update \
 && apt-get dist-upgrade -y \
 && apt-get clean \
 && echo 'Finished installing dependencies'

# Install npm production packages
COPY ./package.json /app/

RUN cd /app; npm --verbose install --production

COPY . /app


ENV NODE_ENV production
ENV PORT 8000
EXPOSE 8000

ARG db_host=default
ARG db_user=default
ARG db_passwd=default
ARG db_db=default
ARG aws_key=default
ARG aws_secret=default

ENV DB_HOST=$db_host
ENV DB_USER=$db_user
ENV DB_PASSWORD=$db_passwd
ENV DB_DATABASE=$db_db
ENV AWS_KEY_ID=$aws_key
ENV AWS_SECRET_KEY=$aws_secret

CMD ["npm", "start"]
