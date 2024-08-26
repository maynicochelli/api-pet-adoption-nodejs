import { petService } from "../services/petService.js";

// Controller: Handle HTTP requests and responses
export const petController = {
  createPet: async (req, res) => {
    try {
      const pet = await petService.createPet(req.body);
      res.status(201).json(pet);
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ error: "An error occurred while creating the pet." });
    }
  },

  getPets: async (req, res) => {
    try {
      const pets = await petService.findPets(req.query.name);
      res.status(200).json(pets);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "An error occurred while fetching pets." });
    }
  },

  updatePet: async (req, res) => {
    try {
      await petService.updatePet(req.params.id, req.body);
      res.status(200).json(req.body);
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ error: "An error occurred while updating the pet." });
    }
  },

  deletePet: async (req, res) => {
    try {
      await petService.deletePet(req.params.id);
      res.status(200).json({ message: "Pet deleted from DB." });
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ error: "An error occurred while deleting the pet." });
    }
  },
};
