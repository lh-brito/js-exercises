// 1 - Utilize o find para retornar o primeiro número do array que é divisível por 3 e 5 , caso ele exista:

const numbers = [19, 21, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = (arr) => arr.find((num) => num % 15 === 0);

console.log('Primeiro número do array divisível por 3 e 5 (15) é:', findDivisibleBy3And5(numbers));

// 2 - Utilize o find para encontrar o primeiro nome com cinco letras, caso ele exista:

const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = (arr) => arr.find((name) => name.length === 5); 

console.log('Primeiro nome com 5 letras é:', findNameWithFiveLetters(names));

// 3 - Utilize o find para encontrar uma música conforme o id passado , caso ela exista:

const musics = [
  { id: '31031685', title: 'Partita in C moll BWV 997' },
  { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
  { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
];

const findMusic = (iD) => musics.find((music) => music.id === iD);
const printMus = (id) => console.log(`A música que possui o ID ${id} é:`, findMusic(`${id}`).title);

printMus('31031685');
printMus('31031686');
printMus('31031687');
