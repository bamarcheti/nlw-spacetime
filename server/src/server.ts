import cors from "@fastify/cors";
import "dotenv/config";
import fastify from "fastify";
import { authRoutes } from "./routes/auth";
import { memoriesRoutes } from "./routes/memories";
import jwt = require("@fastify/jwt");

const app = fastify();

app.register(cors, {
  origin: true,
});

app.register(jwt, {
  secret: "spacetime",
});

app.register(authRoutes);
app.register(memoriesRoutes);

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log("🚀HTTP server running on https://localhost:3333");
  });
