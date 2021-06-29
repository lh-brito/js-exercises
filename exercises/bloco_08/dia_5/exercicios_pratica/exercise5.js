// 5 - Escreva a função swap , que dado um array de 3 elementos, 
// retorna um novo array com o primeiro e terceiro elementos trocados. 
// Detalhe: você precisa fazer essa função gastando 1 linha só:
// Dica: use array destructuring .

const assert = require('assert');

const swappedList = ([a, b, c]) => [c, b, a];

assert.strictEqual(swappedList([1, 2, 3])[0], 3);
assert.strictEqual(swappedList([1, 2, 3])[1], 2);
assert.strictEqual(swappedList([1, 2, 3])[2], 1);
