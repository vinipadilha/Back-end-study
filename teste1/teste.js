const http = require('http')

const server = http.createServer((req, res) => {
    console.log("CHEGOU NA API")
    console.log(req.method)
    console.log(req.url)

    if(req.method === 'GET' && req.url.startsWith('/user')){
        res.writeHead(200)
        res.end('todos os usúarios')
        console.log("Req get recebida")
        return
    }

    if(req.method === 'POST' && req.url.startsWith('/user')){
        res.writeHead(200)
        res.end('todos os usúarios')
        return
    }
    

    res.writeHead(404)
    res.end("recurso não encontrado")

})

server.listen(3000, () => {
    console.log("servidor na porta 3000")
})


