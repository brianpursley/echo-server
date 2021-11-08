FROM node:alpine

EXPOSE 80

ADD echo-server.js /app/echo-server.js

CMD node /app/echo-server.js