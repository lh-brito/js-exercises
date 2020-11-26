let costPrice = 200;
let salePrice = 300;

let profit = (salePrice - (costPrice * 1.2)) * 1000;

if (costPrice == 0 || salePrice == 0) {
    console.log ('Error. One (or more) declared value(s) is(are) equal to 0.')
}
else {
    console.log ('Profit = $' + profit);
}
