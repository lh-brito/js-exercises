// 4 - Dentro de um mesmo arquivo, crie três funções. A primeira deve receber uma string eretorná-la
// em caixa alta. A segunda deve também receber uma string e retornar só a primeira letra. 
// A terceira deve receber duas strings e concatená-las. Faça o mock do arquivo. Faça uma nova 
// implementação para a primeira função, mas agora ela deve retornar a string em caixa baixa. 
// Para a segunda função, uma nova implementação deve retornar a última letra de uma string. 
// A terceira deve receber três strings e concatená-las.

const uppercase = (string) => string.toUpperCase();

const firstLetter = (string) => string.split('')[0];

const concatStrings = (first, second) => first + second;

module.exports = { uppercase, firstLetter, concatStrings };
