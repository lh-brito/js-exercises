let a = 10;
let b = 20;
let c = 30;

if (a > b && a > c) {
    console.log (a);
}
else if (b > a && b > c) {
    console.log (b);
}
else if (c > a && c > b) {
    console.log (c);
}
else {
    console.log ('Duas ou mais variáveis possuem o maior valor.')
}