const myRemove = require('../scripts/myRemove');

describe('myRemove', () => {
  it('Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado', () =>
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]));
  it('Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]', () => 
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]));
    
  const list = [1, 3, 5, 7];
  myRemove(list, 3);
  it('Verifique se o array passado por parâmetro não sofreu alterações', () => 
    expect(list).toEqual([1, 3, 5, 7]));

  it('Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado', () => 
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]));
});
