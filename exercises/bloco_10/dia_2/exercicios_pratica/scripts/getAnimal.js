// 6.1 - Adicione uma funcionalidade para buscar pelo nome do animal - crie uma função que deverá passar no teste abaixo.
// Dica: use o código do exemplo dado para criar uma nova função, analise os testes antes de iniciar.

// 6.2 - Adicione uma nova funcionalidade para buscar pela idade dos animais. O retorno deve ser um array de objetos,
// mas, caso não ache nenhum, retorne uma mensagem de erro. Escreva tanto a função como o seu teste.

const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimal = (data) =>
  new Promise((resolve, reject) =>
    setTimeout(() => {
      const typeNum = typeof data === 'number';
      const animalObj = Animals.find((anml) => (typeNum) ? anml.age === data : anml.name === data);
      if (animalObj) return resolve(animalObj);

      (typeNum) ? reject('Nenhum animal com essa idade!') : reject('Nenhum animal com esse nome!');
    }, 100));

const getAnimal = (data) => findAnimal(data);

module.exports = getAnimal;
