const express = require('express');
const cors = require('cors')
const supabase = require('./supabase')//importa a conexão com supabase
const app = express();
const PORT = process.env.PORT || 3000;

//Middleware essenciais
app.use(cors());//Permite que o frontend acesse este backend acesse este backend sem erros de CORS
app.use(express.json());//Permite que o Express entenda requisições com corpo em JSON

//Passo 1 memória ram do servidor
let produtosEmMemoria = [
    {id:1, nome: 'Reclado Mecânico RGB', preco: 150.00},
    {id:2, nome: 'Mouse Gamer 3200 PDI', preco: 85.00}
];

//Rota GET
app.get('/produtos', async (req, res) =>{
    console.log('[GET /produtos] Enviando produtos em memória...')
    // res.json(produtosEmMemoria);
    const {data, error} = await supabase
    .from('produtos')
    .select('*')
    .order('id', {ascending: true});
    if (error){
        return res.status(500).json({error: error.message});
    }
    res.json(data);
});

//Rota POST
app.post('/produtos', (req, res) => {
    const {nome, preco} = req.body;

    if(!nome || !preco){
        return res.status(400).json({erro:'Nome e preço são obrigatórios!'});
    }

    const novoProduto = {
        id:Date.now(),//gera um id temporário baseado no timestamp
        nome,
        preco: parseFloat(preco)
    };

    produtosEmMemoria.push(novoProduto);
    console.log(`[POST /produtos] Produto adicionado na RAM: ${novoProduto.nome}`);

    res.status(201).json(novoProduto);
});

app.put('/produtos/:id', (req, res) => {
    const {id} = req.params;
    const produto = produtosEmMemoria.find(p => p.id === parseInt(id));
    const {nome, preco} = req.body;

    if(typeof nome!== 'string' || nome.trim() === '' || !Number.isFinite(Number(preco))){
        return res.status(400).json({erro:'Informe um nome e preço válidos!'});
    }

    produto.nome = nome;
    produto.preco = Number(preco);
    console.log(`[PUT /produtos] Produto atualizado na RAM: ${produto.nome}`);

    res.status(201).json(produto);

});

app.delete('/produtos/:id', (req, res) => {
    const {id} = req.params;
    const index = produtosEmMemoria.findIndex(p => p.id === parseInt(id));

    const nome = produtosEmMemoria[index].nome
    produtosEmMemoria.splice(index,1);
    console.log(`[DELETE /produtos] Produto deletado na RAM: ${nome}`);

    res.status(201).json({
        mensagem: `Notícia com ID ${id} removida com sucesso!`
    });
});

//listen Iniciar o servidor
app.listen(PORT, () =>{
    console.log('===========================================');
    console.log(`Servidor Back-End rodando na nuvem`);
    console.log('Rota de produtos ativa em: http://localhost:3000/produtos');
    console.log('Status: MODO MEMÓRIA RAM ATIVO');
    console.log('===========================================');
});

