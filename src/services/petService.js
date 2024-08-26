import { petRepository } from "../repositories/petRepository.js";

// Services: Business logic
export const petService = {
  createPet: (data) => petRepository.createPet(data),
  findPets: (name) => petRepository.findPets(name),
  updatePet: (id, data) => petRepository.updatePet(id, data),
  deletePet: (id) => petRepository.deletePet(id),
};
