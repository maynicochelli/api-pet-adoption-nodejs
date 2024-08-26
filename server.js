import express from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const app = express();
app.use(express.json());

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

app.post("/pets", async (req, res) => {
  try {
    const pet = await prisma.pet.create({
      data: {
        name: req.body.name,
      },
    });

    res.status(201).json(pet);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "An error occurred while executing POST method." });
  }
});

app.get("/pets", async (req, res) => {
  try {
    let pets = [];

    if (req.query.name) {
      pets = await prisma.pet.findMany({
        where: {
          name: req.query.name,
        },
      });
    } else {
      pets = await prisma.pet.findMany();
    }

    res.status(200).json(pets);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "An error occurred while executing GET method." });
  }
});

app.put("/pets/:id", async (req, res) => {
  await prisma.pet.update({
    where: {
      id: req.params.id,
    },
    data: {
      name: req.body.name,
    },
  });

  res.status(201).json(req.body);
});

app.delete("/pets/:id", async (req, res) => {
  await prisma.pet.delete({
    where: {
      id: req.params.id,
    },
  });

  res.status(200).json({ message: "Pet deleted from DB." });
});
