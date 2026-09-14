const express = require('express');
const app = express();
const PORT = 3000;

// Middleware para permitir leitura de JSON em req.body
app.use(express.json());

//BANCO DE DADOS LOCAL EM MEMÓRIA
let noticias = [];
let comentarios = [];

app.get('/noticias',(req, res) => {
    return res.status(200).json(noticias);
});
app.get('/noticias/:id/comentarios',(req, res) => {
    return res.status(200).json(comentarios);
});

app.post('/noticias',(req, res) => {
    const novaNoticia = {
        id:1,
        manchete:"Nova arquitetura Node.js aumenta desempenho de APIs em 40%",
        autor: "Thiago Brandão",
        categoria: "Tecnologia",
        visualizacoes: 1450
    };

    noticias.push(novaNoticia);

    return res.status(201).json({
        mensagem: 'Notícia cadastrada com sucesso!',
        noticia: novaNoticia
    });
});

app.post('/noticias/:id/comentarios',(req, res) => {
    const novoComentario = {
        id:1,
        leitor: "dev_junior2026",
        texto: "Excelente artigo, testei no meu projeto de aula e a diferença foi nítida!",
        curtidas: 12
    };

    comentarios.push(novoComentario);

    return res.status(201).json({
        mensagem: 'Comentário cadastrado com sucesso!',
        comentario: novoComentario
    });
});

app.put('/noticias/:id', (req, res) => {
    const { id } = req.params;
    const index = noticias.findIndex(p => p.id === parseInt(id));
    if (index === -1) {
        return res.status(404).json({ mensagem: 'Notícia não encontrada para atualização.'})
    };
    noticias[index] = {
        id:1,
        manchete:"Nova arquitetura Node.js aumenta desempenho de APIs em 45%",
        autor: "Thiago Brandão",
        categoria: "Tecnologia",
        visualizacoes: 2180
    };
    return res.status(200).json({
        mensagem: 'Notícia atualizada com sucesso!',
        noticia: noticias[index]
    });
});

app.delete('/noticias/:id', (req, res) => {
    const { id } = req.params;
    const index = noticias.findIndex(p => p.id === parseInt(id));
    if (index === -1) {
        return res.status(404).json({ mensagem: 'Notícia não encontrada para exclusão.'});
    };
    noticias.splice(index, 1);
    return res.status(200).json({
        mensagem: `Notícia com ID ${id} removida com sucesso!`
    });
});

app.listen(PORT, () => {
    console.log(`Servidor ativo em http://localhost:${PORT}`);
});