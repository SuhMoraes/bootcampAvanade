  //CURRYING -> Para cada parâmetro, será criado uma nova função = function

  function soma(a){ //Na primeria function só recebo o (a)
    return function(b){ //Que retorna uma nova function, que recebe um segundo parâmetro.
      return a + b;  // (a) -> É uma nova função que recebe o segundo parâmentro.    
    }
  }

  const soma2 = soma(2); //Executando a nova function, será executado a soma, que será armazenado na variável.
  // O (a) -> sempre será 2.
  
  console.log(soma2(2));
  console.log(soma2(3));
  console.log(soma2(4));
  console.log(soma2(5));
  console.log(soma2(6));
