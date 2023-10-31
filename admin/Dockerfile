FROM node:18-alpine

WORKDIR /usr/src/admin

ENV PATH="./node_modules/.bin:$PATH"

COPY package.json package-lock.json .

RUN npm ci --include=dev

COPY . .

RUN npm run build

EXPOSE 4000

CMD ["npm", "run", "dev"]