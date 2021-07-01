const addOne = require('../scripts/addOne');

describe('addOne', () => {
  const myArray = [31, 57, 12, 5];
  const unchanged = [31, 57, 12, 5];
  const expected = [32, 58, 13, 6];
  const output = addOne(myArray);
  it('Testa se addOne é uma função', () => expect(typeof addOne).toMatch('function'));
  it('Verifica se a saida retorna o resultado esperado', () => expect(output).toEqual(expected));
  it('Verifica se o array retornado é inalterado', () => expect(myArray).toEqual(unchanged));
});
