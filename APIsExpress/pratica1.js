// PRATICA 1 DO DEV 

const express = require('express')
const app = express()

// COMUNICA QUE VAI USAR JSON 
app.use(express.json()) 


// FALA QUE PORTA DO PC VAI ESTAR OLHANDO, NO CASO 3000
app.listen(3000, () => {
    console.log("servidor iniciado")
})


const users = []



// FAZ A BUSCA DE TODOS OS USURARIOS
app.get('/usuarios', (req, res) => {
    console.log(req.query)
    res.status(200).send({users: users}) 
})

// GET BY ID
app.get('/usuarios/:id', (req, res) => {
    const alunoId = req.params.id
    res.status(200).send(users.find(x => x.id == alunoId))

})

// POST 
app.post('/usuarios', (req, res) => {
    console.log(req.body)
    users.push(req.body)
    console.log("entrou no alunos")
    res.status(200).send(req.body)
})

// PUT
app.put('/usuarios/:id', (req, res) => {
    res.status(200).send(req.params.id)
})

// DELETE
app.delete('/usuarios/:id', (req, res) => {
    res.status(200).send(req.params.id)
})





