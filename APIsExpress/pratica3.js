// CRIANDO SISTEMA DE LOJA DE VEÍCULOS
const express = require('express')
const app = express()

app.use(express.json())

app.listen(2000, () => {
    console.log("Seu servidor foi iniciado.")
})

const carros = []

app.get('/carros', (req, res) => {
    res.status(200).send({carros: carros}) 
})


















