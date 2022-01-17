FROM nginx
COPY ./nginx.config /etc/nginx/nginx.template
CMD ["/bin/sh", "-c", "envsubst < /etc/nginx/nginx.template > /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'"]
# COPY --from=builder /opt/web/build /usr/share/nginx/html

FROM node:16-alpine

WORKDIR /opt/web
COPY . ./
RUN yarn

ENV PATH="./node_modules/.bin:$PATH"

RUN yarn build