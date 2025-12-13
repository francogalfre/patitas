import type { Request, Response } from "express";
import * as petService from "@/services/pet.service";

import { sendSuccess, sendError, HTTP_STATUS } from "@/utils/response";
import {
  type PetCreationPayload,
  PetCreationPayloadSchema,
} from "@/schemas/pet.schema";
import { ZodError } from "zod";

export const getAllPetsHandler = async (req: Request, res: Response) => {
  const page = parseInt(req.query.page as string) || 1;
  const searchQuery = req.query.search as string;

  const limit = 9;

  try {
    const result = await petService.getAllPets({ page, limit, searchQuery });

    sendSuccess(res, result, "Listado de mascotas recuperado.");
  } catch (error) {
    console.error(error);
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
      return sendError(
        res,
        "El identificador de la mascota es requerido.",
        HTTP_STATUS.BAD_REQUEST
      );
    }

    const result = await petService.getPetById(id);

    if (!result) {
      return sendError(res, "Mascota no encontrada.", HTTP_STATUS.NOT_FOUND);
    }

    sendSuccess(res, result, "Detalle de mascota recuperado.");
  } catch (error) {
    console.error(error);
    sendError(res, "Error al procesar la búsqueda de la mascota.");
  }
};

export const createPetHandler = async (req: Request, res: Response) => {
  try {
    const userId = req.user?.id;

    if (!userId) {
      return sendError(
        res,
        "Usuario no autenticado.",
        HTTP_STATUS.UNAUTHORIZED
      );
    }

    const validatedData: PetCreationPayload = PetCreationPayloadSchema.parse(
      req.body
    );

    if (
      !Array.isArray(validatedData.photos) ||
      validatedData.photos.length === 0
    ) {
      return sendError(
        res,
        "Debe incluir al menos una foto (URL).",
        HTTP_STATUS.BAD_REQUEST
      );
    }

    const newPet = await petService.createPet(validatedData, userId);

    sendSuccess(
      res,
      newPet,
      "Mascota registrada correctamente.",
      HTTP_STATUS.CREATED
    );
  } catch (error) {
    if (error instanceof ZodError) {
      return sendError(
        res,
        "Validación fallida.",
        HTTP_STATUS.BAD_REQUEST,
        error.issues
      );
    }

    sendError(
      res,
      "Error interno del servidor.",
      HTTP_STATUS.INTERNAL_SERVER_ERROR
    );
  }
};

export const markPetAsAdoptedHandler = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const userId = req.user?.id;

    if (!userId) {
      return sendError(
        res,
        "Usuario no autenticado.",
        HTTP_STATUS.UNAUTHORIZED
      );
    }

    if (!id) {
      if (!id) {
        return sendError(
          res,
          "El identificador de la mascota es requerido.",
          HTTP_STATUS.BAD_REQUEST
        );
      }
    }

    const result = await petService.markAsAdopted(id, userId);

    sendSuccess(res, result, "La mascota fue marcada como adoptada.");
  } catch (error) {
    sendError(res, "Error al marcar la mascota como adoptada");
  }
};

export const deletePetHandler = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const userId = req.user?.id;

    if (!userId) {
      return sendError(
        res,
        "Usuario no autenticado.",
        HTTP_STATUS.UNAUTHORIZED
      );
    }

    if (!id) {
      if (!id) {
        return sendError(
          res,
          "El identificador de la mascota es requerido.",
          HTTP_STATUS.BAD_REQUEST
        );
      }
    }

    const result = await petService.deletePet(id, userId);

    sendSuccess(res, result, "La mascota fue eliminada con exito.");
  } catch (error) {
    sendError(res, "Error al dar de baja a la mascota.");
  }
};
