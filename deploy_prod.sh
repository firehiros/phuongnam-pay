#!/bin/sh
echo '~~~~~~ Starting build dockerfile ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~'
REGION=ap-east-1
HOST=589111770588.dkr.ecr.ap-east-1.amazonaws.com
IMAGE=uno-homepage
ENV=prod

# Build image
aws ecr get-login-password --region $REGION | docker login --username AWS --password-stdin $HOST
docker build . -t $HOST/$IMAGE:$ENV
docker tag $IMAGE:$ENV $HOST/$IMAGE:$ENV
docker push $HOST/$IMAGE:$ENV

echo '~~~~~~ Ending build dockerfile ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~'