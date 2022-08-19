FROM node:14-alpine3.14

# Setting working directory. All the path will be relative to WORKDIR
WORKDIR /usr/src/app

# Copying source files
COPY . .

# Installing dependencies
RUN yarn global add pm2
RUN yarn
RUN yarn build

EXPOSE 3000
# Running the app
ENTRYPOINT [ "pm2-runtime", "start", "ecosystem.json" ]