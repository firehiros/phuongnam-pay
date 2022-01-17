FROM nginx:alpine
COPY ./nginx.config /etc/nginx/conf.d/default.conf

# CMD ["/bin/sh", "-c", "envsubst < /etc/nginx/nginx.template > /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'"]
# COPY --from=builder /opt/web/build /usr/share/nginx/html

RUN apk add --no-cache --repository http://nl.alpinelinux.org/alpine/edge/main libuv \
    && apk add --no-cache --update-cache --repository http://dl-cdn.alpinelinux.org/alpine/edge/main nodejs=16.13.2-r0 npm=8.3.0-r0 \
    && apk add --no-cache --update-cache --repository http://dl-cdn.alpinelinux.org/alpine/edge/community yarn=1.22.17-r0 \
    && echo "NodeJS Version:" "$(node -v)" \
    && echo "NPM Version:" "$(npm -v)" \
    && echo "Yarn Version:" "$(yarn -v)"

WORKDIR /var/www/
COPY . ./
RUN yarn
RUN yarn build
# RUN yarn dev
# ENTRYPOINT "/docker-entrypoint.sh"
# ADD ./start.sh /
# RUN chmod +x /start.sh
# ENTRYPOINT ["/start.sh"]
# CMD ["nginx", "-g", "daemon off;"]
# CMD nginx
# ENV PATH="./node_modules/.bin:$PATH"