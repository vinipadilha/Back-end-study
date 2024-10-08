// ARQUIVO ESPECIALISTA EM ROTAS 

const express = require('express')
const routes = express.Router()

module.exports = routes


let db =  [
    { '1': { Nome: 'Cliente 1 ', Idade: '20' } },
    { '2': { Nome: 'Cliente 2 ', Idade: '20' } },
    { '3': { Nome: 'Cliente 3 ', Idade: '20' } }
]

// Buscar dados
routes.get('/', (req, res) => {
    return res.json(db)
})


// Inserir dados
routes.post('/add', (req, res) => {
    const body = req.body

    if(!body)
        return res.status(400).end()

    db.push(body)
    return res.json(body)      

})


// DELETAR DADOS

routes.delete("/:id", (req, res) => {
    const id = req.params.id

    let newDB = db.filter(item => {
        if (!item[id])
            return item
    })

    db = newDB

    return res.send(newDB)
})
