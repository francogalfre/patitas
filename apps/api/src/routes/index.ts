import { Router } from "express";

import petRoutes from "./pets.routes";

const router = Router();

router.use("/pets", petRoutes);

export default router;
