const express = require('express')
const app = express()
const port = 3000;


app.get('/day', (req, resp) => {
    resp.send("Endpoint 01, aula 01 ")
})

app.get('/spi', (req, resp) => {
    resp.send("Endpoint 02")
})

app.listen(port, () => {
    console.log("Rodando na porta: " + port)
})