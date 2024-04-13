function maioresQueMedia(lista) {
    const media = calculaMedia(lista);
    const maiores = [];
  
    for (const numero of lista) {
      if (numero > media) {
        maiores.push(numero);
      }
    }
  
    return maiores;
  }
  
  function calculaMedia(lista) {
    let soma = 0;
    for (const numero of lista) {
      soma += numero;
    }
    return soma / lista.length;
  }
  function menorValor(lista) {
    let menor = lista[0];
    for (const numero of lista) {
      if (numero < menor) {
        menor = numero;
      }
    }
    return menor;
  }

  function somaItens(lista) {
    let soma = 0;
    for (const numero of lista) {
      soma += numero;
    }
    return soma;
  }
  
  function menoresQue20(lista) {
    const menores20 = [];
    for (const numero of lista) {
      if (numero < 20) {
        menores20.push(numero);
      }
    }
    return menores20;
  }
  function primeiroUltimo(lista) {
    if (lista.length === 0) {
      return "Lista vazia";
    }
  
    const primeiro = lista[0];
    const ultimo = lista[lista.length - 1];
    return `Primeiro valor: ${primeiro}, Último valor: ${ultimo}`;
  }
  const lista = [10, 25, 18, 32, 5, 7];

console.log("Valores maiores que a média:", maioresQueMedia(lista));
console.log("Menor valor:", menorValor(lista));
console.log("Soma dos itens:", somaItens(lista));
console.log("Valores menores que 20:", menoresQue20(lista));
console.log("Primeiro e último valor:", primeiroUltimo(lista));
