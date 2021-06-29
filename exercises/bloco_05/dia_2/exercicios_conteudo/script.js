// Exercícios: Parte I - Buscando elementos

// 1 - Acesse o elemento elementoOndeVoceEsta.
document.getElementById("elementoOndeVoceEsta");
    
// 2 - Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
document.getElementsByTagName("div")[3].parentNode.style.color = "blue";

// 3 - Acesse o primeiroFilhoDoFilho e adicione um texto a ele.
document.querySelector("#primeiroFilhoDoFilho").innerText = "Insira algum texto inteligente aqui\n\n";

// 4 - Acesse o primeiroFilho a partir de pai.
document.querySelectorAll("#pai")[0].childNodes[1];

// 5 - Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta.
document.getElementById("elementoOndeVoceEsta").previousElementSibling;

// 6 - Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta.
document.getElementsByTagName("div")[3].nextSibling;

// 7 - Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta.
document.querySelector("#elementoOndeVoceEsta").nextElementSibling;

// 8 - Agora acesse o terceiroFilho a partir de pai.
document.querySelectorAll("#pai")[0].childNodes[5];

// Exercícios: Parte II - Criando elementos

// 1 - Crie um irmão para elementoOndeVoceEsta.
let anotherBrother = document.createElement("div");
anotherBrother.innerText = "\nOutra(o) irmã(o).\n'Elemento Div irmão do Div com ID (elementoOndeVoceEsta).'";
anotherBrother.id = "quintoEMaisNovoFilho";
document.getElementById("pai").appendChild(anotherBrother);

// 2 - Crie um filho para elementoOndeVoceEsta.
let myNewChild = document.createElement("div");
myNewChild.innerText = "Meu novo filho.\n'Elemento Div filho do Div com ID (elementoOndeVoceEsta).'\n\n";
myNewChild.id = "terceiroEMaisNovoFilhoDoFilho";
document.getElementsByTagName("div")[3].appendChild(myNewChild);

// 3 - Crie um filho para primeiroFilhoDoFilho.
let childOfMyChild = document.createElement("div");
childOfMyChild.innerText = "Filha do meu filho.\n'Elemento Div filho do Div com ID (primeiroFilhoDoFilho).'\n\n"
childOfMyChild.id = "filhoDoFilhoDoFilho";
document.querySelector("#primeiroFilhoDoFilho").appendChild(childOfMyChild);

// 4 - A partir desse filho criado, acesse terceiroFilho.
document.querySelectorAll("#filhoDoFilhoDoFilho")[0].parentNode.parentNode.nextElementSibling;

// Exercícios: Parte III - Removendo elementos

// 1 - Remova todos os elementos da página, menos pai, elementoOndeVoceEsta e primeiroFilhoDoFilho.
let father = document.getElementById('pai');

for (let i = 0; i < 3; i += 1) {
    if (i === 0) {
        father.firstElementChild.remove();
        father.firstElementChild.firstElementChild.lastElementChild.remove();
    }
    else {
        father.firstElementChild.lastElementChild.remove();
    }
    father.lastElementChild.remove();
}
