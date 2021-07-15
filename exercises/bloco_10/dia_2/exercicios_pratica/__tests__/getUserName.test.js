// 2 - Utilizando a sintaxe de Promise , faça um teste que verifique o resultado da função getUserName para 
// o caso em que o usuário é encontrado, e também um teste para o caso em que o usuário não é encontrado.
// Dica: Veja os dados falsos utilizados no banco de dados, disponíveis na variável users, para saber quais IDs existem.

const getUserName = require('../scripts/getUserName');

describe('Checks user with Promise - getUserName', () => {
  it('returns the user name', () => getUserName(4).then((data) => expect(data).toEqual('Mark')));

  it('returns an error', () => getUserName(2).catch((error) =>
    expect(error).toEqual({ error: 'User with 2 not found.' })));
});

// 3 - Reescreva o teste do exercício anterior, desta vez utilizando a sintaxe de async/await .

describe('Checks user with Async/Await - getUserName', () => {
  it('returns the user name', async () => expect(await getUserName(5)).toEqual('Paul'));

  it('returns an error', async () => { 
    try {
      await getUserName(3);
    } catch (error) {
      expect(error).toEqual({ error: 'User with 3 not found.' });
    }
  });
});
