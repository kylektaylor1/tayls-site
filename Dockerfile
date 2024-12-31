FROM node:22.12.0-alpine AS builder

WORKDIR /app
RUN npm install -g pnpm
COPY package*.json .
RUN pnpm install
COPY . .
RUN pnpm build
RUN pnpm prune --prod

FROM builder AS deployer

WORKDIR /app
COPY --from=builder /app/build build/
COPY --from=builder /app/package.json .
EXPOSE 3000
ENV NODE_ENV=production
CMD [ "node", "build" ]
