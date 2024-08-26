import express from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const app = express()
app.use(express.json)

app.post('/pets', async (req, res) => {

    await prisma.pet.create({
        data: {
            name: req.body.name
        }
    })

    // Response status + resource created
    res.status(201).json(req.body)
})

app.get('/pets', async (req, res) => {

    const pets = []

    if(req.query){
        // Filter
        pets = await prisma.pet.findMany({
            where: {
                name: req.query.name
            }
        })
    } else {
        pets = await prisma.pet.findMany()
    }

    res.status(200).json(pets)
})

app.put('/pets/:id', async (req, res) => {

    await prisma.pet.update({
        where: {
            id: req.params.id
        },
        data: {
            name: req.body.name
        }
    })

    res.status(201).json(req.body)
})

app.delete('/pets/:id', async (req, res) => {
    await prisma.pet.delete({
        where: {
            id: req.params.id
        }
    })

    res.status(200).json({ message: 'pet deleted'})
})

app.listen(3000)
