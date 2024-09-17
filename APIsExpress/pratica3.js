// CRIANDO SISTEMA DE LOJA DE VEÍCULOS
const express = require('express')
const app = express()

app.use(express.json())

app.listen(2000, () => {
    console.log("Seu servidor foi iniciado.")
})

const carros = []

app.get('/carros', (req, res) => {
    res.status(200).send(carros) 

})

app.get('/carros/:id', (req, res) => {
    const carro = carros.find(x => x.id == req.params.id)
    res.status(200).send(findCar)
})



app.post('/carros', (req, res) => {
    carros.push(req.body)
    res.status(200).send("Carro cadastrado com sucesso!")
})


// atualizar cadastro de carro 
app.put('/carros/:id', (req, res) => {
    const carro = carros.find(x => x.id == req.params.id)

    const carroId = carros.indexOf(carro)
    carros[carroId] = req.body
    res.status(200).send("Cadastro de carro atualizado com sucesso!")
})

app.delete('/carros/:id', (req, res) => {
    const carro = carros.find(x => x.id == req.params.id)
    const carroId = carros.indexOf(carro)
    carros.splice(carroId, 1)
    res.status(200).send(req.params.id)
})














