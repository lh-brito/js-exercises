// 5. Compare dois objetos (JSON) para verificar se são idênticos ou não

const obj1 = {
  title: 'My Title',
  description: 'My Description',
};

const obj2 = {
  description: 'My Description',
  title: 'My Title',
};

const obj3 = {
  title: 'My Different Title',
  description: 'My Description',
};

describe('compare', () => {
  it('comparation 1', () => expect(obj1).toEqual(obj2));
  it('comparation 2', () => expect(obj2).not.toEqual(obj3));
  it('comparation 3', () => expect(obj3).not.toEqual(obj1))
});
