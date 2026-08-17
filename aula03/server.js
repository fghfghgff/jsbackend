//server.js - Primeiro servidor Node.js
const express = require('express');
const app = express();
const PORT = 3000;
app.get('/', (req, res) => {
    res.send('Servidor Node.js rodando na porta:' + PORT);
});
app.listen(PORT, () => {
    console.log(`Servidor ativo em http://localhost:${PORT}`);
})