FROM node:10-alpine

COPY . ./client
WORKDIR ./client
RUN apk --no-cache add --virtual builds-deps build-base python && npm --build-from-source install bcrypt 
RUN npm install
EXPOSE 3000
CMD ["npm","start"]