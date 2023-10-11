const express = require('express')
const app = express()

const path = require('path')
const basePath = path.join(__dirname, 'TEMPLATES')

app.get('/usuarios/:id', (requisicao, resposta) => {
    const id = requisicao.params.id

    console.log(`Usuário: ${id}`)

    resposta.sendFile(`${basePath}/usuarios.html`)
})

app.get('/', (requisicao, resposta) => {
    resposta.sendFile(`${basePath}/index.html`)
})

app.listen(3000)