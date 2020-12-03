function sum (a, b) {
    console.log ('Sum: ' + a + ' + ' + b + ' = ' + (a + b));
}

function subtraction (c, d) {
    console.log ('Subtraction: ' + c + ' - ' + d + ' = ' + (c - d));
}

function multiplication (e, f) {
    console.log ('Multiplication: ' + e + ' * ' + f + ' = ' + (e * f));
}

function division (g, h) {
    console.log ('Division: ' + g + ' / ' + h + ' = ' + (g / h));
}

function remainder (i, j) {
    console.log ('Remainder: ' + i + ' % ' + j + ' = ' + (i % j));
}

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
}

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

function isThisATriangle (angleA, angleB, angleC) {
    let sum = angleA + angleB + angleC;
    let result = false;

    if (sum === 180) {
        result = true;
    }

    console.log (result);
}

function chessPiece (piece) {
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
}

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
}

function evenNumber (a, b, c) {
    result = false;

    if (a % 2 == 0 || b % 2 == 0 || c % 2 == 0) {
        result = true;
    }

    console.log (result);
}

function oddNumber (a, b, c) {
    result = false;

    if (a % 2 == 1 || b % 2 == 1 || c % 2 == 1) {
        result = true;
    }

    console.log (result);
}

function productsProfit (costPrice, salePrice) {
    let profit = (salePrice - (costPrice * 1.2)) * 1000;

    if (costPrice == 0 || salePrice == 0) {
        console.log ('Error. One (or more) declared value(s) is(are) equal to 0.')
    }
    else {
        console.log ('Profit = $' + profit);
    }
}

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
gradingScale (30);
evenNumber (3, 2, 1);
oddNumber (2, 4, 6);
productsProfit (200, 300);
netSalary (3500);
