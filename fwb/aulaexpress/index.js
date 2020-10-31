const express = require('express');
const app = express();
const port = 3000;

app.get('/aula', (req, resp) => {
    resp.send('Olá, bem vindo a aula express');
    });

app.put('/put', (req, resp) => {
    resp.send('requisição PUT');
    });

app.post('/post', (req, resp) => {
    resp.send('requisição POST');
    });

app.delete('/delete', (req, resp) => {
    resp.send('requisiçaõ DELETE');
    });       

app.listen(port, () => {
    console.log('Aplicação express porta' + port)
})