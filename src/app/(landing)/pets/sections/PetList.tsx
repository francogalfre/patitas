import React from "react";
import { pets } from "../mock-pets";

const PetList = () => {
  const availablePets = pets.filter((pet) => pet.status === "disponible");

  return (
    <main className="py-8 px-4 max-w-7xl mx-auto">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          Mascotas en Adopción
        </h2>
        <p className="text-gray-600">
          Encuentra a tu compañero perfecto entre nuestras mascotas disponibles
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {availablePets.map((pet) => (
          <div
            key={pet.id}
            className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-gray-200"
          >
            {/* Imagen placeholder */}
            <div className="h-48 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
              <div className="text-6xl">
                {pet.species === "Perro" ? "🐕" : "🐱"}
              </div>
            </div>

            <div className="p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-gray-900">
                  {pet.name}
                </h3>
                <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full">
                  {pet.status}
                </span>
              </div>

              <div className="space-y-1 text-sm text-gray-600 mb-3">
                <p>
                  <span className="font-medium">Especie:</span> {pet.species}
                </p>
                <p>
                  <span className="font-medium">Raza:</span> {pet.breed}
                </p>
                <p>
                  <span className="font-medium">Edad:</span> {pet.age} años
                </p>
                <p>
                  <span className="font-medium">Género:</span> {pet.gender}
                </p>
                <p>
                  <span className="font-medium">Ubicación:</span> {pet.location}
                </p>
              </div>

              <p className="text-gray-700 text-sm mb-4 line-clamp-2">
                {pet.description}
              </p>

              <div className="flex gap-2">
                <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm font-medium">
                  Ver Detalles
                </button>
                <button className="flex-1 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors duration-200 text-sm font-medium">
                  Adoptar
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {availablePets.length === 0 && (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">🐾</div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            No hay mascotas disponibles
          </h3>
          <p className="text-gray-600">
            Pronto tendremos nuevas mascotas esperando un hogar
          </p>
        </div>
      )}
    </main>
  );
};

export default PetList;
