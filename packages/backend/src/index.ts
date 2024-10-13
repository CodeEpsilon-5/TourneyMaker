import { Elysia, t } from "elysia";
import { cors } from '@elysiajs/cors'

const app = new Elysia()
  .use(cors())
  .get("/", () => "Hello Elysia")
  .post("/echo", ({body}) => body, {
    body: t.Object({
      teste1: t.String(),
      teste2: t.Number(),
      teste3: t.Optional(t.Boolean())
    })
  })
  .put("/user/:id", ({body}) => body, {
    body: t.Object({
      teste1: t.String(),
      teste2: t.Number(),
      teste3: t.Optional(t.Boolean())
    })
  })
  .listen(3000);

export type App = typeof app;

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
