FROM node:18-alpine

WORKDIR /usr/src/site

ENV PATH="./node_modules/.bin:$PATH"

COPY package.json package-lock.json .

RUN npm ci --include=dev

COPY . .

RUN npm run build

EXPOSE 5000

CMD ["npm", "run", "dev"]