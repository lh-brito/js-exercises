// 3. Quando a promise for resolvida com sucesso, retorne um array com 4 itens, 
// sendo eles o resultado da divisão do numero resultante por 2, 3, 5 e 10.

// 4. Quando a Promise for rejeitada, imprima, via console.log , 
// a frase "É mais de oito mil! Essa promise deve estar quebrada!"

// 5. Quando a Promise for bem-sucedida, encadeie nela uma segunda Promise que some os elementos do array.

const fetchPromise = () =>
  new Promise((resolve, reject) => {
    const sum = Array.from({ length: 10 }, () => Math.floor(Math.random() * 50) + 1 )
      .map((num) => num * num).reduce((sum, num) => sum + num, 0);

    console.log('Número gerado:', sum);
    (sum < 8000) ? resolve(sum) : reject();
    })
      .then((sum) => [2, 3, 5, 10].map((div) => sum / div))
      .then((arr) => console.log('Array gerado:', arr,
        `\nSoma do array: ${arr.reduce((acc, curr) => acc + curr, 0).toFixed(2)} - 113.33%`))
      .catch(() => console.log('É mais de oito mil! Essa promise deve estar quebrada!'));

fetchPromise();
