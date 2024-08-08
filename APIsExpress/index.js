const express = require('express');
const app = express();

app.use(express.json());

app.get('/alunos', (req, res) => {
    console.log("entrou no alunos")
    res.status(200).send('deu certo')

})

app.listen(3000, () => {
    console.log('iniciei meu servidor')
})

