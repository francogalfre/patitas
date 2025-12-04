import { Router } from "express";

import {
  getAllPetsHandler,
  getPetByIdHandler,
  createPetHandler,
  markPetAsAdoptedHandler,
  deletePetHandler,
} from "../controllers/pet.controller";

const router = Router();

router.get("/", getAllPetsHandler);
router.get("/:id", getPetByIdHandler);

router.post("/", createPetHandler);
router.patch("/:id/adopt", markPetAsAdoptedHandler);
router.delete("/:id", deletePetHandler);

export default router;
