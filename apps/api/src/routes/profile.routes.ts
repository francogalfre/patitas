import { Router } from "express";

import {
  deleteProfileHandler,
  getProfileByIdHandler,
  updateProfileBioHandler,
  updateProfileHandler,
} from "../controllers/user.controller";
import { authMiddleware } from "../middleware/auth";

const router = Router();

router.get("/:id", getProfileByIdHandler);

// Rutas protegidas
router.patch("/:id/edit", authMiddleware(true), updateProfileHandler);
router.patch("/:id/edit/bio", authMiddleware(true), updateProfileBioHandler);

router.delete("/:id", authMiddleware(true), deleteProfileHandler);

export default router;
