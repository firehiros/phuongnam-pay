FROM node:14-alpine3.14

# Setting working directory. All the path will be relative to WORKDIR
WORKDIR /usr/src/app

# Copying source files
COPY . .

# Installing dependencies
RUN npm install -g pm2
RUN npm install
RUN npm run build

EXPOSE 3000
# Running the app
ENTRYPOINT [ "pm2-runtime", "start", "ecosystem.json" ]