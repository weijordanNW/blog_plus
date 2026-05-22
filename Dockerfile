FROM node:20-bookworm-slim AS builder

WORKDIR /app

ENV NODE_OPTIONS=--max_old_space_size=8192

RUN corepack enable

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

COPY . .
RUN pnpm build

FROM nginx:1.27-alpine

COPY --from=builder /app/src/.vuepress/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
