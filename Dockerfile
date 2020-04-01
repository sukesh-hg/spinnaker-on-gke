FROM node:12-slim
COPY . /sample-app
WORKDIR /sample-app
RUN npm install
CMD [ "npm", "start" ]

