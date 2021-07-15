const math = require('../scripts/math');
jest.mock("../scripts/math");

// Exercícios de fixação

describe('Exercicios de fixação', () => {
  it('1. Faça o mock da função subtrair e teste sua chamada', () => {
    math.subtrair = jest.fn();

    math.subtrair();
    expect(math.subtrair).toHaveBeenCalled();
  });
  it('2. Faça o mock da função multiplicar e implemente como retorno padrão o valor "10". '
  + 'Teste a chamada e o retorno.', () => {
    math.multiplicar = jest.fn().mockReturnValue(10);

    math.multiplicar();
    expect(math.multiplicar).toHaveBeenCalled();
    expect(math.multiplicar()).toBe(10);
  });
  it('3. Faça o mock da função somar e implemente uma função que recebe dois valores '
  + 'e retorna sua soma. Teste a chamada, o retorno e os parâmetros passados.', () => {
    math.somar.mockImplementation((a, b) => a + b);

    math.somar(3, 9);
    expect(math.somar).toHaveBeenCalled();
    expect(math.somar(4, 5)).toBe(9);
    expect(math.somar).toHaveBeenCalledWith(3, 9);
  });
  it('4. Faça o mock da função dividir e implemente um retorno padrão com o valor "15". '
  + 'Implemente também os seguintes valores para a primeira e segunda chamadas: "2" e "5". '
  + 'Teste a chamada, o retorno, os parâmetros e quantas vezes a função foi chamada.', () => {
    math.dividir = jest.fn()
    .mockReturnValue(15)
    .mockReturnValueOnce(2)
    .mockReturnValueOnce(5);

    math.dividir(50, 10);
    expect(math.dividir).toHaveBeenCalled();
    expect(math.dividir()).toBe(5);
    expect(math.dividir).toHaveBeenCalledWith(50, 10);
    expect(math.dividir).toHaveBeenCalledTimes(2);
  });
  it('5. Faça o mock da função subtrair de maneira que seja possível restaurar sua '
  + 'implementação original. Defina como retorno padrão o valor "20". Teste o número de chamadas '
  + 'e o retorno. Restaure a implementação original da função e teste sua execução.', () => {
    // // implementação original
    // expect(math.subtrair(15, 5)).toBe(10);                 ***Verificar no plantão quando puder***
    
    // criando o mock de substituição e definindo seu retorno padrão para 20
    const mockSubtrair = jest
    .spyOn(math, 'subtrair')
    .mockImplementation((a, b) => a * b)
    .mockReturnValue(20);

    // testa o número de chamadas e o retorno
    expect(mockSubtrair).toHaveBeenCalledTimes(1);
    expect(mockSubtrair()).toBe(20);

    // restaura a implementação original da função e testa a execução
    mockSubtrair.mockRestore(); //                            ***Verificar no plantão quando puder***
    mockSubtrair.mockReturnValue(7); //                       ***Verificar no plantão quando puder***
    
    expect(mockSubtrair(10, 3)).toBe(7);
  });
});

// // Mockando módulos

// test("#somar", () => {
//   // Aqui testamos se função foi chamada, quantas vezes foi chamada, 
//   // quais parâmetros foram usados e qual seu retorno
//   math.somar.mockImplementation((a, b) => a + b);
//   math.somar(1, 2);

//   expect(math.somar).toHaveBeenCalled();
//   expect(math.somar).toHaveBeenCalledTimes(1);
//   expect(math.somar).toHaveBeenCalledWith(1, 2);
//   expect(math.somar(1, 2)).toBe(3);
// });

// // jest.spyOn() 

// test("#somar", () => {
//   // testando a implementação original, o mock e a restauração da função original

//   // implementação original
//   expect(math.somar(1, 2)).resolves.toBe(3);

//   // criando o mock e substituindo a implementação para uma subtração
//   const mockSomar = jest
//     .spyOn(math, "somar")
//     .mockImplementation((a, b) => a - b);

//   math.somar(5, 1);
//   expect(mockSomar).toHaveBeenCalledTimes(1);
//   expect(mockSomar(5, 1)).toBe(4);
//   expect(mockSomar).toHaveBeenCalledTimes(2);
//   expect(mockSomar).toHaveBeenLastCalledWith(5, 1);

//   // restaurando a implementação original
//   math.somar.mockRestore();
//   expect(math.somar(1, 2)).resolves.toBe(3);
// });
