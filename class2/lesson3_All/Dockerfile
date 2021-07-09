FROM node:14
RUN mkdir -p /app
WORKDIR /app
ADD package.json /app
RUN npm install
ADD . /app
CMD ["npm","run","start"]

# docker build -t bakergy-nodejs --file ./Dockerfile .