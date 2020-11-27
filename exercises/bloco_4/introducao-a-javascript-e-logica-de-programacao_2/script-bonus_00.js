//Exercício Bônus 01:

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let indexOne = 1; indexOne < numbers.length; indexOne += 1) {
    for (let indexTwo = 0; indexTwo < indexOne; indexTwo += 1) {
        if (numbers[indexOne] < numbers[indexTwo]) {
            let position = numbers[indexOne];
            
            numbers[indexOne] = numbers[indexTwo];
            numbers[indexTwo] = position;
        }
    }
}

console.log (numbers);
