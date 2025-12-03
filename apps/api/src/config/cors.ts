import type { CorsOptions } from "cors";

export const corsOptions: CorsOptions = {
  origin: process.env.WEB_URL,
  credentials: true,
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
};
