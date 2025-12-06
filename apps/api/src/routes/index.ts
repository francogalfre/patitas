import { Router } from "express";

import petRoutes from "./pets.routes";
import profileRoutes from "./profile.routes";

const router = Router();

router.use("/pets", petRoutes);
router.use("/profiles", profileRoutes);

export default router;
