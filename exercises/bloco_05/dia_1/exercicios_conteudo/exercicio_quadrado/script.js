// Styling the big square with getElementBy 
let greater = document.getElementById("stack");
greater.style.backgroundColor = "red";

// Styling the columns with getElementsByClassName
function stylingColumns(position, color) {
    let column = document.getElementsByClassName("column_" + position)[0];
    column.style.backgroundColor = "" + color;
}

// Styling the medium squares with querySelectorAll 
function stylingMediumSquares(whichColumnClassName, color) {
    let medium = document.querySelectorAll(whichColumnClassName + " > div");
    for (let i = 0; i < medium.length; i += 1) {
        medium[i].style.backgroundColor = "" + color;
    }
}

// Styling all minor squares
let minor = document.querySelectorAll("div>div>div>div");
for (let i = 0; i < minor.length; i += 1) {
    minor[i].style.backgroundColor = "orange";
}

// Styling only the top minor squares
let columns = document.querySelectorAll("#stack>div");
for (let i = 0; i < columns.length; i += 1) {
    let top = document.querySelector("." + columns[i].className + ">div>div");
    top.style.backgroundColor = "pink";
}

// Using functions
stylingColumns("left", "blue");
stylingColumns("right", "green");

stylingMediumSquares(".column_left", "violet");
stylingMediumSquares(".column_right", "purple");
