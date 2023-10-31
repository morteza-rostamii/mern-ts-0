# latest node
FROM node:18-alpine

# working dir inside of the image
WORKDIR /usr/src/api

# copy the package.json and package-lock.json
#COPY package*.json .
COPY package.json package-lock.json .

# install the exact version of packages install in package.json

RUN npm ci --include=dev
#RUN npm install

# copy the hole ./api folder into image
COPY . .

# container port
EXPOSE 3000

CMD ["npm", "run", "start"]

