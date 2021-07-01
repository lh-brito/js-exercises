const myRemoveWithoutCopy = require('../scripts/myRemoveWithoutCopy');

describe('myRemoveWithoutCopy', () => {
  const list = [1, 2, 3, 4];

  it('Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) retorna o array esperado', () => 
    expect(myRemoveWithoutCopy(list, 3)).toEqual([1, 2, 4]));

  it('Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]',
    () => expect(myRemoveWithoutCopy(list, 3)).not.toEqual([1, 2, 3, 4]));

  myRemoveWithoutCopy(list, 3);
  it('Faça uma chamada para a função myRemoveWithoutCopy e '
    + 'verifique se o array passado por parâmetro sofreu alterações', () =>
      expect(list).toEqual([1, 2, 4]));

  it('Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 5) retorna o array esperado',
    () => expect(myRemoveWithoutCopy(list, 5)).toEqual(list));
});
