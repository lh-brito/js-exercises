const { encode, decode } = require('../scripts/encodeDecode');

describe('encodeDecode', () => {
  it('Teste se encode e decode são funções', () =>
    expect(typeof encode && typeof decode).toBe('function'));
  it('Para a função encode teste se as vogais a, e, i, o, u convertem em 1, 2, 3, 4 e 5, '
    + 'respectivamente', () => expect(encode('gouveia')).toBe('g45v231'));
  it('Para a função decode teste se os números 1, 2, 3, 4, 5 convertem nas vogais a, e, i, o, u, '
    + 'respectivamente', () => expect(decode('25fr1z34')).toBe('eufrazio'));
  it('Teste se as demais letras não são convertidos para cada caso', () => 
    expect(encode('qnn j')).toBe('qnn j'));
  it('Teste se os demais números não são convertidos para cada caso', () =>
    expect(decode('67890')).toBe('67890'));
  it('Teste se a string que é retornada pela função encode têm o mesmo número de caracteres que a '
    + 'string passada como parâmetro', () => expect(encode('encoding').length).toBe(8));
  it('Teste se a string que é retornada pela função decode têm o mesmo número de caracteres que a '
    + 'string passada como parâmetro', () => expect(decode('decoded').length).toBe(7));
});
