// 1 - Crie uma função que gere um número aleatório entre 0 e 100. Você irá criar também os testes
// para essa função. Utilizando o mock, defina o retorno padrão como 10.
// Teste se a função foi chamada, qual seu retorno e quantas vezes foi chamada.

const service = require('../scripts/randomNumber');

test('Testando se a função foi chamada, qual seu retorno e quantas vezes foi chamada', () => {
  const randomNumber = service.randomNumber = jest.fn().mockReturnValue(10);

  expect(randomNumber()).toBe(10);
  expect(randomNumber).toHaveBeenCalled();
  expect(randomNumber).toHaveBeenCalledTimes(1);
});

// 2 - Com a mesma função do exercício anterior, utilizando o mock, crie uma nova implementação, que
// deve receber dois parâmetros e retornar a divisão do primeiro pelo segundo. Essa implementação 
// deve ocorrer uma única vez. Faça os testes necessários.

test('Testa o retorno, quais parâmetros, quantas vezes e se a função foi chamada', () => {
  const mockDiv = service.randomNumber = jest.fn().mockImplementationOnce((a, b) => a / b);

  expect(mockDiv(10, 5)).toBe(2);
  expect(mockDiv).toHaveBeenCalled();
  expect(mockDiv).toHaveBeenCalledTimes(1);
  expect(mockDiv).toHaveBeenCalledWith(10, 5);
});

// 3 - Ainda na mesma função do primeiro exercício, utilizando o mock, crie uma nova implementação
// que receba três parâmetros e retorne sua multiplicação. Após fazer os devidos testes para ela,
// resete sua implementação e crie uma nova, que receba um parâmetro e retorne seu dobro.
// Faça os testes necessários.

test('Faz teste com o mock criado, reseta-o, '
+ 'cria uma nova que retorna o dobro de um parâmetro', () => {
  const mockMulti = service.randomNumber = jest.fn().mockImplementation((a, b, c) => a * b * c);

  expect(mockMulti(2, 10, 5)).toBe(100);
  expect(mockMulti).toHaveBeenCalled();
  expect(mockMulti).toHaveBeenCalledTimes(1);
  expect(mockMulti).toHaveBeenCalledWith(2, 10, 5);

  mockMulti.mockReset();
  expect(mockMulti).toHaveBeenCalledTimes(0);

  mockMulti.mockImplementation((a) => a * 2);

  expect(mockMulti(30)).toBe(60);
  expect(mockMulti).toHaveBeenCalled();
  expect(mockMulti).toHaveBeenCalledTimes(1);
  expect(mockMulti).toHaveBeenCalledWith(30);
});
