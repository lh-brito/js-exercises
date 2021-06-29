/*  
    Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
    - document.getElementById()
    - document.getElementsByClassName()
    - document.getElementsByTagName()
*/

// 1. Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. 
function meIn2YearsText() {
    document.getElementsByTagName("p")[1].innerText = "Ganhando de 3500 pra cima e cursando Engenharia da Computação.";
}

// 2. Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
function changeSideSquareColor() {
    document.getElementsByClassName("main-content")[0].style.backgroundColor = "rgb(76,164,109)";
}

// 3. Crie uma função que mude a cor do quadrado vermelho para branco.
function changeCentralSquareColor() {
    document.getElementsByClassName("center-content")[0].style.backgroundColor = "white";
}

// 4. Crie uma função que corrija o texto da tag <h1>.
function correctTitle() {
    document.getElementsByTagName("h1")[0].innerText = "Exercício 5.1 - JavaScript";
}

// 5. Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
function changeToUpperCase() {
    let text = document.getElementsByTagName("p");
    for (let i = 0; i < text.length; i += 1) {
        text[i].innerHTML = text[i].innerHTML.toUpperCase();
    }
}

// 6. Crie uma função que exiba o conteúdo de todas as tags <p> no console.
function showParagraphs() {
    let paragraphs = document.getElementsByTagName("p");
    for (let i = 0; i < paragraphs.length; i += 1) {
        console.log(paragraphs[i].innerHTML);
    }
}

meIn2YearsText();
changeSideSquareColor();
changeCentralSquareColor();
correctTitle()
changeToUpperCase();
showParagraphs();
