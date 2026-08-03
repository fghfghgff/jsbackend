// Sintaxe de Arrow Function ( (parâmetros) => retorno )
const gerarRespostaHTTP = (status, mensagem) => {
  return `HTTP Status ${status}: ${mensagem}`;
};

// Executando a função
const resultado = gerarRespostaHTTP(200, "Sucesso ao buscar produtos");
console.log(resultado);