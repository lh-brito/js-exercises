// 6 - Crie uma função que faça requisição para a api dog pictures . Mocke a requisição e crie dois
// testes. O primeiro deve interpretar que a requisição se resolveu e teve como valor
// "request sucess". O segundo deve interpretar que a requisição falhou e ter como valor
// "request failed". Crie todos os testes que achar necessário.

const dogPicturesApi = require('../scripts/dogPicturesApi');

describe('Testando a requisição', () => {
  const dogPicture = dogPicturesApi.fetchDog = jest.fn();
  afterEach(dogPicture.mockReset);

  it('Promise resolvida', async () => { 
    dogPicture.mockResolvedValue('request sucess');

    expect(dogPicture()).resolves.toBe('request sucess');
    expect(dogPicture).toHaveBeenCalled();
    expect(dogPicture).toHaveBeenCalledTimes(1);
  });

  it('Promise rejeitada', async () => {
    dogPicture.mockRejectedValue('request failed');

    expect(dogPicture).toHaveBeenCalledTimes(0);
    expect(dogPicture()).rejects.toBe('request failed');
    expect(dogPicture).toHaveBeenCalled();
    expect(dogPicture).toHaveBeenCalledTimes(1);
  });
});
