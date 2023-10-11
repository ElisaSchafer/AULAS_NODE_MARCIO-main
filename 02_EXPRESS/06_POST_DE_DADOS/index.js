const express = require('express')
const app = express()

const path = require('path')
const basePath = path.join(__dirname, 'TEMPLATES')

app.use(express.urlencoded( {
    extended: true
}))

// converter em objeto
app.use(express.json())

app.use(express.static('PUBLIC'))

app.post('/usuarios/enviar', (requisicao, resposta) => {
    const nome = requisicao.body.nome
    const email = requisicao.body.email

    console.log(`
    Usuário: ${nome}
    Email: ${email}`)

    resposta.redirect('/')
}) 

app.post('/usuarios/enviar', (requisicao, resposta) => {
    console.log(requisicao.body)
})

app.get('/usuarios/cadastrar', (requisicao, resposta) => {
    resposta.sendFile(`${basePath}/form.html`)

})
app.get('/usuarios/:id', (requisicao, resposta) => {
    const id = requisicao.params.id

    console.log(`Usuário: ${id}`)

    resposta.sendFile(`${basePath}/usuarios.html`)
})

app.get('/', (requisicao, resposta) => {
    resposta.sendFile(`${basePath}/index.html`)
})

app.listen(3000)