import type { Request, Response } from "express";
import * as petService from "../services/pet.service";

import { sendSuccess, sendError, HTTP_STATUS } from "../utils/response";
import {
  type PetCreationPayload,
  PetCreationPayloadSchema,
} from "../schemas/pet.schema";
import { ZodError } from "zod";

export const getAllPetsHandler = async (req: Request, res: Response) => {
  try {
    const pets = await petService.getAllPets();
    sendSuccess(res, pets, "Listado de mascotas recuperado.");
  } catch (error) {
    sendError(
      res,
      "No fue posible listar las mascotas.",
      HTTP_STATUS.INTERNAL_SERVER_ERROR
    );
  }
};

export const getPetByIdHandler = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    if (!id) {
      if (!id) {
        return sendError(
          res,
          "El identificador de la mascota es requerido.",
          HTTP_STATUS.BAD_REQUEST
        );
      }
    }

    const pet = await petService.getPetById(id);

    if (!pet) {
      return sendError(res, "Mascota no encontrada.", HTTP_STATUS.NOT_FOUND);
    }

    sendSuccess(res, pet, "Detalle de mascota recuperado.");
  } catch (error) {
    sendError(res, "Error al procesar la búsqueda de la mascota.");
  }
};

export const createPetHandler = async (req: Request, res: Response) => {
  try {
    const validatedData: PetCreationPayload = PetCreationPayloadSchema.parse(
      req.body
    );

    const newPet = await petService.createPet(validatedData);

    sendSuccess(
      res,
      newPet,
      "Mascota registrada correctamente.",
      HTTP_STATUS.CREATED
    );
  } catch (error) {
    if (error instanceof ZodError) {
      console.error("DEBUG ZOD ERROR:", error);

      return sendError(
        res,
        "Validación fallida. Revise los detalles de la validación.",
        HTTP_STATUS.BAD_REQUEST,
        error.issues
      );
    }

    const errorMessage =
      (error as Error).message || "Error interno desconocido.";

    sendError(res, errorMessage, HTTP_STATUS.INTERNAL_SERVER_ERROR);
  }
};

export const markPetAsAdoptedHandler = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    if (!id) {
      if (!id) {
        return sendError(
          res,
          "El identificador de la mascota es requerido.",
          HTTP_STATUS.BAD_REQUEST
        );
      }
    }

    const pet = await petService.markAsAdopted(id);

    sendSuccess(res, pet, "La mascota fue marcada como adoptada.");
  } catch (error) {
    res.json({ Error: error });
    sendError(res, "Error al marcar la mascota como adoptada");
  }
};

export const deletePetHandler = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    if (!id) {
      if (!id) {
        return sendError(
          res,
          "El identificador de la mascota es requerido.",
          HTTP_STATUS.BAD_REQUEST
        );
      }
    }

    const pet = await petService.deletePet(id);

    sendSuccess(res, pet, "La mascota fue eliminada con exito.");
  } catch (error) {
    sendError(res, "Error al dar de baja a la mascota.");
  }
};
