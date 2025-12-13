import { Router } from "express";

import {
  getAllPetsHandler,
  getPetByIdHandler,
  createPetHandler,
  markPetAsAdoptedHandler,
  deletePetHandler,
} from "../controllers/pet.controller";

import { authMiddleware } from "../middleware/auth";

const router = Router();

router.get("/", getAllPetsHandler);
router.get("/:id", getPetByIdHandler);

// Rutas protegidas
router.post("/", authMiddleware(true), createPetHandler);
router.patch("/:id/adopt", authMiddleware(true), markPetAsAdoptedHandler);
router.delete("/:id", authMiddleware(true), deletePetHandler);

export default router;
