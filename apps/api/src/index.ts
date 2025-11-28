import express, { type Request, type Response } from "express";
import cors from "cors";

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.json({ message: "API funcionando!" });
});

app.listen(port, () => console.log(`API en http://localhost:${port}`));
