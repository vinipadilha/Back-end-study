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
    res.status(200).send({users: users}) 
})

// GET BY ID
app.get('/usuarios/:id', (req, res) => {
    const alunoId = req.params.id
    res.status(200).send(users.find(x => x.id == alunoId))

})

// POST 
app.post('/usuarios', (req, res) => {
    users.push(req.body)
    res.status(200).send("Aluno Cadastrado")
})

// PUT
app.put('/usuarios/:id', (req, res) => {
    const usuario = users.find(x => x.id == req.params.id)    
    // na linha acima o req.params.id vai buscar a id que o cliente digitou na URL 
    // e o metodo find vai percorrer o array ate achar a mesma id que foi colocada na URL 
    
    
    const alunoId = users.indexOf(usuario)
    users[alunoId] = req.body
    // usuarios[alunoId]: Localiza o usuário no array pelo seu índice.
    // req.body: Contém os novos dados para substituir o usuário existente.
    
    
    res.status(200).send("O aluno foi atualizado com sucesso!")
})

// DELETE
app.delete('/usuarios/:id', (req, res) => {
    const usuario = users.find(x => x.id == req.params.id)
    const alunoId = users.indexOf(usuario)
    users.splice(alunoId, 1)
    res.status(200).send(req.params.id)
})



