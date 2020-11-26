let grossPay = 3500;

let trybePayment = 0;
let inssTax;
let irTax;

console.log ('Gross Salary: ' + grossPay.toFixed(2));

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
