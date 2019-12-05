FROM node:10-alpine

COPY . ./server
WORKDIR ./server
RUN apk --no-cache add --virtual builds-deps build-base python && npm --build-from-source install bcrypt
RUN npm install
EXPOSE 5000
CMD ["npm","start"]