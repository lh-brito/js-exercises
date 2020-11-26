let grossPay = 3500;

let inssTax;
let irTax;

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

let netPay = grossPay - inssTax;

if (netPay <= 1903.98) {
    irTax = 0;
}
else if (netPay <= 2826.65) {
    irTax = netPay * 0.075 - 142.80;
}
else if (netPay <= 3751.05) {
    irTax = netPay * 0.15 - 354.80;
}
else if (netPay <= 4664.68) {
    irTax = netPay * 0.225 - 636.13;
}
else {
    irTax = netPay * 0.275 - 869.36;
}

console.log ('Salary: ' + (netPay - irTax));
