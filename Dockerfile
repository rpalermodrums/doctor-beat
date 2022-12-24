FROM node:18-bullseye-slim as builder
ENV MODE=production

WORKDIR /app

COPY package.json yarn.lock .yarnrc.yml .pnp* ./
COPY .yarn .yarn
RUN yarn install --immutable

COPY vite.config.ts index.html tsconfig.* .env* ./
COPY src src

RUN yarn build

FROM nginx:stable-alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
