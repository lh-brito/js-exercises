// Faça cinco programas, um para cada operação aritmética básica. Seu programa deve 
// ter duas variáveis, a e b, definidas no começo com os valores que serão operados. 
// Faça programas para: Adição, Subtração, Multiplicação, Divisão, Módulo.

function sum (a, b) {
    console.log ('Sum: ' + a + ' + ' + b + ' = ' + (a + b));
}

function subtraction (a, b) {
    console.log ('Subtraction: ' + a + ' - ' + b + ' = ' + (a - b));
}

function multiplication (a, b) {
    console.log ('Multiplication: ' + a + ' * ' + b + ' = ' + (a * b));
}

function division (a, b) {
    console.log ('Division: ' + a + ' / ' + b + ' = ' + (a / b));
}

function remainder (a, b) {
    console.log ('Remainder: ' + a + ' % ' + b + ' = ' + (a % b) + '\n');
}

// Faça um programa que retorne o maior de dois números. Defina no começo 
// do programa duas variáveis com os valores que serão comparados.

function greaterNumberTwo (x, y) {
    if (x > y) {
        console.log ('The greater number is x. Its value is: ' + x);
    }
    else if (y > x) {
        console.log ('The greater number is y. Its value is: ' + y);
    }
    else {
        console.log ('Both variables have the same value.')
    }
}

// Faça um programa que retorne o maior de três números. Defina no começo 
// do programa três variáveis com os valores que serão comparados.

function greaterNumberThree (x, y, z) {
    if (x > y && x > z) {
        console.log ('The greater number is x. Its value is: ' + x);
    }
    else if (y > x && y > z) {
        console.log ('The greater number is y. Its value is: ' + y);
    }
    else if (z > x && z > y) {
        console.log ('The greater number is z. Its value is: ' + z);
    }
    else {
        console.log ('Two or more variables have the same value.')
    }
console.log ('');
}

// Faça um programa que, dado um valor definido numa variável, retorne "positive" 
// se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.

function positiveNegativeZero (a) {
    if (a > 0) {
        console.log ('positive');
    }
    else if (a < 0) {
        console.log ('negative');
    }
    else {
        console.log ('zero')
    }
}

// Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo. 
// Retorne true se os ângulos representarem os ângulos de um triângulo e false caso contrário.
// Caso os ângulos estejam inválidos, o programa deve retornar uma mensagem de erro.

function isThisATriangle (angleA, angleB, angleC) {
    let sum = angleA + angleB + angleC;
    let result = false;

    if (sum === 180) {
        result = true;
    }

    console.log (result);
}

// Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz. 
// Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras 
// maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
// Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.

function chessPiece (piece) {
    console.log ('');
    switch (piece.toLowerCase()) {
        case 'king':
            console.log ('King: any direction - 1 square. Additionally, kings are able to make a special move, know as castling.');
            break;
        case 'queen':
            console.log ('Queen: diagonally, horizontally or vertically - any number of squares.');
            break;
        case 'rook':
            console.log ('Rook: horizontally or vertically - any number of squares. Rooks move when the king castles.');
            break;
        case 'bishop':
            console.log ('Bishop: diagonally - any number of squares.');
            break;
        case 'knight':
            console.log ('Knight: "L" shape - 2 squares in a horizontal or vertical direction, then move 1 square horizontally or vertically. They are the only piece able to jump over other pieces.');
            break;
        case 'pawn':
            console.log ('Pawn: vertically forward - 1 square, with the option to move 2 squares if they have not yet moved. Pawns capture one square diagonally in a forward direction. Pawns are unable to move backwards on captures or moves. Upon reaching the other side of the board a pawn promotes into any other piece, except for a king. Additionally, pawns can make a special move named En Passant.');
            break;
        default:
            console.log ('Please write the correct name of the piece you wanna get to know.')
    }
    console.log('');    
}

// Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. 
// Siga essas regras: Porcentagem >= 90 -> A; Porcentagem >= 80 -> B; Porcentagem >= 70 -> C
// Porcentagem >= 60 -> D; Porcentagem >= 50 -> E; Porcentagem < 50 -> F
// O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.

function gradingScale (grade) {
    if (grade < 0 || grade > 100) {
        console.log ('Error. declared grade is not between 0 and 100.');
    }
    else if (grade >= 90) {
        console.log ('Your grade is A');
    }
    else if (grade >= 80) {
        console.log ('Your grade is B');
    }
    else if (grade >= 70) {
        console.log ('Your grade is C');
    }
    else if (grade >= 60) {
        console.log ('Your grade is D');
    }    
    else if (grade >= 50) {
        console.log ('Your grade is E');
    }
    else {
        console.log ('Your grade is F');
    }
console.log ('');
}

// Escreva um programa que defina três números em variáveis no seu começo e retorne true se pelo menos uma das três for par. 
// Caso contrário, ele retorna false. Bonus: use somente um if.

function evenNumber (a, b, c) {
    result = false;

    if (a % 2 == 0 || b % 2 == 0 || c % 2 == 0) {
        result = true;
    }

    console.log (result);
}

// Escreva um programa que defina três números em variáveis no seu começo e retorne true se pelo menos uma das três for ímpar.
// Caso contrário, ele retorna false. Bonus: use somente um if.

function oddNumber (a, b, c) {
    result = false;

    if (a % 2 == 1 || b % 2 == 1 || c % 2 == 1) {
        result = true;
    }

    console.log (result);
}

// Escreva um programa que se inicie com dois valores em duas variáveis diferentes: o custo de um produto e seu valor de venda. 
// A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa
// terá ao vender mil desses produtos. Atente que, sobre o custo do produto, incide um imposto de 20%.
// Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.

function productsProfit (costPrice, salePrice) {
    console.log ('');
    let profit = (salePrice - (costPrice * 1.2)) * 1000;

    if (costPrice == 0 || salePrice == 0) {
        console.log ('Error. One (or more) declared value(s) is(are) equal to 0.')
    }
    else {
        console.log ('Profit = $' + profit);
    }
}

// Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. 
// Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido. 
// A notação para um salário de R$1500,10, por exemplo, deve ser 1500.10. 
// Para as faixas de impostos, use as seguintes referências:
//
/* INSS
    Salário bruto até R$ 1.556,94: alíquota de 8%
    Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
    Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
    Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88 */
/* IR
    Até R$ 1.903,98: isento de imposto de renda
    De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
    De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
    De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
    Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto. */

function netSalary (grossPay) {
    let trybePayment = 0;
    let inssTax;
    let irTax;

    console.log ('\nGross Salary: ' + grossPay.toFixed(2));

    if (grossPay >= 3500) {
        trybePayment = grossPay * 0.17;
    }

    console.log ('Trybe: R$ ' + trybePayment.toFixed(2));
    grossPay = grossPay - trybePayment;

    if (grossPay <= 1556.94) {
        inssTax = grossPay * 0.08;
    }
    else if (grossPay <= 2594.92) {
        inssTax = grossPay * 0.09;
    }
    else if (grossPay <= 5189.82) {
        inssTax = grossPay * 0.11;
    }
    else {
        inssTax = 570.88;
    }

    console.log ('INSS: R$ ' + inssTax.toFixed(2));
    grossPay = grossPay - inssTax;

    if (grossPay <= 1903.98) {
        irTax = 0;
    }
    else if (grossPay <= 2826.65) {
        irTax = grossPay * 0.075 - 142.80;
    }
    else if (grossPay <= 3751.05) {
        irTax = grossPay * 0.15 - 354.80;
    }
    else if (grossPay <= 4664.68) {
        irTax = grossPay * 0.225 - 636.13;
    }
    else {
        irTax = grossPay * 0.275 - 869.36;
    }

    let netPay = grossPay - irTax;
    let totalTax = trybePayment + inssTax + irTax;

    console.log ('IR: R$ ' + irTax.toFixed(2));
    console.log ('Total Tax: R$ ' + totalTax.toFixed(2));
    console.log ('Net Salary: R$ ' + netPay.toFixed(2));
}

sum (10, 20);
subtraction (70, 20);
multiplication (8, 10);
division (100, 5);
remainder (31, 3);
greaterNumberTwo (350, 300);
greaterNumberThree (1000, 2000, 4000);
positiveNegativeZero (3);
isThisATriangle (50, 60, 50);
chessPiece ('ROOK');
gradingScale (80);
evenNumber (3, 2, 1);
oddNumber (2, 4, 6);
productsProfit (200, 330);
netSalary (3600);
