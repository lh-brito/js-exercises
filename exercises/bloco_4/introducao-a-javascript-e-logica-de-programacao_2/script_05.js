//Exercício 06:

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let oddCounter = 0;

for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] % 2 == 1) {
        oddCounter += 1;
    }
}

if (oddCounter == 0) {
    console.log ('Nenhum valor ímpar encontrado');
}
else {
    console.log (oddCounter);
}
