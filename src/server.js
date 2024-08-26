import express from "express";
import { petController } from "./controllers/petController.js";

const app = express();
app.use(express.json());

app.post("/pets", petController.createPet);
app.get("/pets", petController.getPets);
app.put("/pets/:id", petController.updatePet);
app.delete("/pets/:id", petController.deletePet);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
