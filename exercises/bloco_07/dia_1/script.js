// Parte I

/* 1. Faça as modificações necessárias na função para que o seu comportamento
  respeite o escopo no qual cada variável foi declarada.
* Modifique a estrutura da função para que ela seja uma arrow function .
* Modifique as concatenações para template literals. */

const testingScope = escopo => (
  escopo ? 'Não devo ser utilizada fora do meu escopo (if). Ótimo, fui utilizada no escopo!' : 'Não devo ser utilizada fora meu escopo (else)'
);

console.log(testingScope(true));

/* 2. Faça uma função que retorne o array oddsAndEvens em ordem crescente.
* Utilize template literals para que a chamada console.log(oddsAndEvens); 
retorne "Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!".
* Bônus (opcional): tente fazer o mesmo exercício utilizando o método array.sort() . 
Spoiler: É possível realizar uma função que ordene qualquer array de números. */

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortOddsAndEvens = () => {
  oddsAndEvens[0] = 2;
  oddsAndEvens[1] = 3;
  oddsAndEvens[2] = 4;
  oddsAndEvens[3] = 7;
  oddsAndEvens[4] = 10;
  oddsAndEvens[5] = 13;

  return oddsAndEvens;
}

const sortedArray = sortOddsAndEvens();

console.log(`Os números ${sortedArray} se encontram ordenados de forma crescente!`);

// Bônus

const sortArrayBonus = array => {
  const sortOddsAndEvens = array.sort((a, b) => a -b);
  return sortOddsAndEvens;
};

const sortedArrayBonus = sortArrayBonus(oddsAndEvens);

console.log(`Os números ${sortedArrayBonus} se encontram ordenados de forma crescente!`);

// Bônus simplificado em uma frase.

console.log(`Os números ${oddsAndEvens.sort((a, b) => a -b)} se encontram ordenados de forma crescente!`); 

// Parte II

/* Abaixo, você verá algumas especificações de algoritmos para desenvolver. 
É fundamental que você utilize o que aprendeu sobre let, const, arrow functions, template literals e ternary operator.
1. Crie uma função que receba um número e retorne seu fatorial.
* Na matemática, o fatorial de um número não negativo N, com a notação N! , é o produto de todos os inteiros menores ou iguais a N.
Exemplo: 4! = 4 * 3 * 2 * 1 = 24.
* Bônus (opcional): tente fazer o mesmo exercício de forma recursiva. Spoiler: É possível resolver com uma linha usando ternary operator. */

const factorialNumber = number => {
  let result = 1;
  for(let i = 2; i <= number; i += 1) {
    result *= i;
  }
  return result
};

console.log(factorialNumber(4));

// Bônus

const factorial = number => number > 1 ? number * factorial(number - 1) : 1;

console.log(factorial(5));

/* 2. Crie uma função que receba uma frase e retorne qual a maior palavra.
Exemplo:

* longestWord("Antônio foi no banheiro e não sabemos o que aconteceu") // retorna 'aconteceu' */

const longestWord = string => {
  let wordArray = string.split(' '); // Divide a frase
  let maxLength = 0; // Variável que guarda o tamanho da maior palavra da frase
  let result = ''; // Variável que guardará o resultado

  for (const word of wordArray) { // Percorre as palavras da frase
    if (word.length > maxLength) { // Se o tamanho da palavra atual for maior que o valor anterior de maxLength
      maxLength = word.length; // O tamanho da palavra atual é igual a maior palavra da frase até então 
      result = word; // Palavra atual é igual o resultado da maior palavra em caracteres.
    }
  }
  return result; // Retorna o resultado
};

console.log(longestWord('Antonio foi no banheiro e não sabemos o que aconteceu'));

/* 4. Crie um código JavaScript com a seguinte especificação:
  Não se esqueça de usar template literals
* Função 1 : Escreva uma função que vai receber uma string como parâmetro. 
  Sua função deverá procurar pela letra x em uma string qualquer que você determinar e substituir pela string que você passou como parâmetro. 
  Sua função deve retornar essa nova string.
  Exemplo:
  * String determinada: "Tryber x aqui!"
  * Parâmetro: "Bebeto"
  * Retorno: "Tryber Bebeto aqui!"
* Um array com escopo global, que é o escopo do arquivo JS , nesse caso, contendo cinco strings com suas principais skills .
* Função 2 : Escreva uma função que vai receber a string retornada da Função 1 como parâmetro.
  Essa função deve concatenar as skills do array global à string que foi passada para a Função 2 via parâmetro.
  Você deve ordenar os skills em ordem alfabética. Sua função deve retornar essa nova string.
  Exemplo: "Tryber x aqui! Minhas cinco principais habilidades são:
  * JavaScript;
  * HTML; ... */

let skills = ['Javascript', 'Python', 'Java', 'C#', 'Ruby'];

const skillPhrase = string => {
  let msg = 'Tryber x aqui!'
  return msg.replace('x', `${string}`);
}

console.log(skillPhrase('Lucas'));


