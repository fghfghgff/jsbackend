import express from 'express';
const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Clínica Veterinária AmigoFiel');
});

app.get('/sobre', (req, res) => {
  res.send('Plantão 24h e vacinação');
});

app.get('/consultas', (req, res) => {
  const itens = [
    { id: 1, especialidade: 'Consulta', duracao: '45 mins', valor: 200 },
    { id: 2, especialidade: 'Vacinação', duracao: '15 mins', valor: 80 }
  ];

  res.json(itens);
});

app.listen(PORT, () => {
    console.log(`Servidor ativo em http://localhost:${PORT}`);
});