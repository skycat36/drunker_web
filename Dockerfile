FROM node:14.15.0
COPY my-app my-app
EXPOSE 3000
WORKDIR /my-app/
RUN npm install
ENTRYPOINT ["npm","start"]