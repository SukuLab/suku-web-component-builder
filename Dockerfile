FROM node:10.15.0 as build-stage
COPY ./ /app
WORKDIR /app
RUN npx npm i typescript@">=3.1.1 <3.2"
RUN npx npm i @angular/cli
RUN npm install
RUN npm run prod:lib

RUN docker run --name git-push -d  \
    -e GIT_REPO="ssh://github.com/SukuLab/suku-web-components-library.git" \
    -e GIT_BRANCH="feature/livestock-ui" \
    -e GIT_ORIGIN="origin" \
    -e COMMIT_USER="parashur" \
    -e COMMIT_EMAIL="parashuramb727@gmail.com" \
    -e WORKING_DIR="/git" \
    -e SSH_KEY="<private key>" \
    -e FILES_TO_COMMIT="." \
    -e SLEEP_INTERVAL="600" \
    -v /path/to/git/repo:/git git-push:latest

FROM nginx:1.15.6
COPY --from=build-stage /app/dist/suku/ /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]

