import express from 'express'

const app = express()
app.use(express.json)

const pets = []

app.post('/pets', (req, res) => {

    pets.push(req.body)

    // Response status + resource created
    res.status(201).json(req.body)
})

app.get('/pets', (req, res) => {
    
    res.status(200).json(pets)
})

app.listen(3000)

app.put('/pets')

app.delete('/pets')
