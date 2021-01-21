FROM node:alpine
RUN pwd
WORKDIR /app
COPY /app .
RUN npm install
CMD ["npm", "run", "start"]