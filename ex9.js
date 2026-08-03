const rotasAPI = ["/usuarios", "/produtos"];

// Adicionando um novo item na lista:
rotasAPI.push("/pedidos");

console.log("Total de rotas ativas:", rotasAPI.length);

// Percorrendo a esteira com forEach:
rotasAPI.forEach((rota, indice) => {
  console.log(`Rota #${indice + 1}: ${rota}`);
});