const getListAnimals = require('../scripts/getListAnimals');

// 1. Callbacks:

// const SumNumbers = (a, b, callback) => {
//   setTimeout(() =>
//     callback(a + b), 500)
// };

// test('Testando SumNumbers, soma 5 mais 10', (done) => {
//   SumNumbers(5, 10, (result) => {
//     expect(result).toBe(15);
//     done();
//   });
// });

// 2. Promises:

// test('Quando o tipo do animal existe', () => {
//   return getListAnimals('Dog').then((listDogs) => {
//     expect(listDogs[0].name).toEqual('Dorminhoco');
//     expect(listDogs[1].name).toEqual('Soneca');
//   });
// });

// test('Quando o tipo do animal não existe', () => {
//   return getListAnimals('Lion').catch((error) =>
//     expect(error).toEqual({ error: "Não possui esse tipo de animal." }));
// });

// 3. Async/Await:

// test('Testando com async/await', async () => {
//     const listDogs = await getListAnimals('Dog');
//     expect(listDogs[0].name).toEqual('Dorminhoco');
//     expect(listDogs[1].name).toEqual('Soneca');
// });

// test('Testando com async/await, testando o reject', async () => {
//   try {
//     await getListAnimals('Lion');
//   } catch (error) {
//     expect(error).toEqual({ error: "Não possui esse tipo de animal." });
//   }
// });

// 4. Matcher .resolves / .rejects:

// describe('Testando Matcher .resolves / .rejects com promise - findAnimalsByType', () => {
//   const listDogs = [
//     { name: 'Dorminhoco', age: 1, type: 'Dog' },
//     { name: 'Soneca', age: 2, type: 'Dog' },
//   ];

//   it('Quando o tipo do animal existe', () =>
//     expect(getListAnimals('Dog')).resolves.toEqual(listDogs));

//   it('Quando o tipo de animal não existe', () =>
//     expect(getListAnimals('Lion'))
//     .rejects.toEqual({ error: 'Não possui esse tipo de animal.' }));
// });

// 5. Matcher .resolves / .rejects com Async/Await:

describe('Testando Matcher .resolves / .rejects com Async/Await - findAnimalsByType', () => {
  const listDogs = [
    { name: 'Dorminhoco', age: 1, type: 'Dog' },
    { name: 'Soneca', age: 2, type: 'Dog' },
  ];

  it('Quando o tipo do animal existe', async () => 
    await expect(getListAnimals('Dog')).resolves.toEqual(listDogs));

  it('Quando o tipo do animal não existe', async () =>
    await expect(getListAnimals('Lion'))
    .rejects.toEqual({ error: 'Não possui esse tipo de animal.' }));
});
