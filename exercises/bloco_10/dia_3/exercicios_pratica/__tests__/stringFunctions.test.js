// 4 - Dentro de um mesmo arquivo, crie três funções. A primeira deve receber uma string eretorná-la
// em caixa alta. A segunda deve também receber uma string e retornar só a primeira letra. 
// A terceira deve receber duas strings e concatená-las. Faça o mock do arquivo. Faça uma nova 
// implementação para a primeira função, mas agora ela deve retornar a string em caixa baixa. 
// Para a segunda função, uma nova implementação deve retornar a última letra de uma string. 
// A terceira deve receber três strings e concatená-las.

const stringFunctions = require('../scripts/stringFunctions');

describe('Testando implementações', () => {
  it('Primeira função deve retornar a string em caixa baixa', () => {
    const toLowerCase =
    stringFunctions.uppercase = jest.fn().mockImplementation((string) => string.toLowerCase());

    expect(toLowerCase('TESTANDO')).toBe('testando');
    expect(toLowerCase).toHaveBeenCalled();
    expect(toLowerCase).toHaveBeenCalledTimes(1);
    expect(toLowerCase).toHaveBeenCalledWith('TESTANDO');
  });
  it('Segunda função deve retornar a última letra de uma string', () => {
    const lastLetter =
      stringFunctions.firstLetter = jest.fn().mockImplementation(str => str.charAt(str.length - 1));

    expect(lastLetter('beleza')).toBe('a');
    expect(lastLetter).toHaveBeenCalled();
    expect(lastLetter).toHaveBeenCalledTimes(1);
    expect(lastLetter).toHaveBeenCalledWith('beleza');
  });
  it('Terceira função deve receber três strings e concatená-las', () => {
    const concat3Strings =
      stringFunctions.concatStrings = jest.fn().mockImplementation((a, b, c) => a.concat(b, c));

    expect(concat3Strings('Demi', '-', 'Fiend')).toBe('Demi-Fiend');
    expect(concat3Strings).toHaveBeenCalled();
    expect(concat3Strings).toHaveBeenCalledTimes(1);
    expect(concat3Strings).toHaveBeenCalledWith('Demi', '-', 'Fiend');
  });
});

// 5 - Utilizando as mesmas funções do exercício anterior, repita a implementação
// para a primeira função. Após repetir a implementação, restaure a implementação
// original e crie os testes necessários para validar.

test('Repita a implementação para a primeira função. Após repetir a implementação, '
+ 'restaure a implementação original e crie os testes necessários para validar.', () => {
  const mock = jest
    .spyOn(stringFunctions, 'uppercase')
    .mockImplementation((a) => a.toLowerCase());

  expect(mock('TESTE')).toBe('teste');
  expect(mock).toHaveBeenCalled();
  expect(mock).toHaveBeenCalledTimes(2);
  expect(mock).toHaveBeenCalledWith('TESTE');

  mock.mockRestore();
  mock.mockImplementation((a) => a.toUpperCase());

  expect(mock('bom dia')).toBe('BOM DIA');
});
