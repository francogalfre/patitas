import express, { type Request, type Response } from "express";

import cors from "cors";
import { corsOptions } from "./config/cors";

import routes from "./routes";

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/health", (req: Request, res: Response) => {
  res.json({
    status: "ok",
    message: "API de Patitas funcionando correctamente",
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
  });
});

app.use("/api", routes);

app.listen(PORT, () => {
  console.log("🐾 PATITAS API ");
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
  console.log(`📚 Health check: http://localhost:${PORT}/health`);
});
