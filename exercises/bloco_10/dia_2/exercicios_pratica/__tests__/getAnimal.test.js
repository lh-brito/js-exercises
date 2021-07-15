// 6.1 - Adicione uma funcionalidade para buscar pelo nome do animal - crie uma função que deverá passar no teste abaixo.
// Dica: use o código do exemplo dado para criar uma nova função, analise os testes antes de iniciar.

const getAnimal = require('../scripts/getAnimal');

describe('Procurar animal pelo nome', () => {
  it('Quando existe o animal com o nome procurado', () =>
    getAnimal('Dorminhoco').then((animal) =>
      expect(animal).toEqual({ name: 'Dorminhoco', age: 1, type: 'Dog' })));

  it('Quando não existe o animal com o nome procurado', () =>
    getAnimal('Bob').catch((error) =>
      expect(error).toEqual('Nenhum animal com esse nome!')));
});

// 6.2 - Adicione uma nova funcionalidade para buscar pela idade dos animais. O retorno deve ser um array de objetos,
// mas, caso não ache nenhum, retorne uma mensagem de erro. Escreva tanto a função como o seu teste.

describe('Procurar animal pela idade', () => {
  it('Quando existe o animal com a idade procurada', () =>
    getAnimal(2).then((animal) =>
      expect(animal).toEqual({ name: 'Soneca', age: 2, type: 'Dog' })));

  it('Quando não existe o animal com a idade procurada', () =>
    getAnimal(10).catch((error) =>
      expect(error).toEqual('Nenhum animal com essa idade!')));
});
