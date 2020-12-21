FROM node:14.15.0
COPY my-app my-app
EXPOSE 3000
RUN cd my-app && npm start