import prisma from "../client.js";

// Repositories: Interact with the database
export const petRepository = {
  createPet: (data) => prisma.pet.create({ data }),
  findPets: (name) => {
    if (name) {
      return prisma.pet.findMany({ where: { name } });
    }
    return prisma.pet.findMany();
  },
  updatePet: (id, data) => prisma.pet.update({ where: { id }, data }),
  deletePet: (id) => prisma.pet.delete({ where: { id } }),
};
