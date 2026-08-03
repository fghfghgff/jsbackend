// Conceito visual de Requisição e Resposta no Back-End:
// Cliente faz:  GET /produtos
// Servidor faz: Processa no banco de dados e retorna JSON
const respostaServidor = {
  status: 200,
  mensagem: "Pedido recebido na cozinha do servidor!",
  dados: ["Prato 1", "Prato 2"]
};

console.log(respostaServidor);