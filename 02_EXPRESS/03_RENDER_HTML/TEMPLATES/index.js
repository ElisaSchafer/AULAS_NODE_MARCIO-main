const express = require('express')
const app = express()

const path = require('path')

const basePath = path.join(__dirname, 'TEMPLATES')

app.get('/', (requisicao, resposta) => {
    resposta.sendFile(`${basePath}/index.html`)
})

app.listen(3000)