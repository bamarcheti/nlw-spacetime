import cors from "@fastify/cors";
import fastify from "fastify";
import { memoriesRoutes } from "./routes/memories";

const app = fastify();

app.register(cors, {
  origin: true,
  // origin: ['https://localhost:3000', 'https://rocketseat.com.br/'],
});
app.register(memoriesRoutes);

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log("🚀HTTP server running on https://localhost:3333");
  });
