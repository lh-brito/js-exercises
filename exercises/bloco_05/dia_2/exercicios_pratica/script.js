// O objetivo desses exercícios é colocar em prática o que você acabou de aprender sobre DOM. 
// Por isso, você deve fazer os exercícios utilizando apenas código JavaScript, 
// o qual deve ser inserido entre as tags <script> e </script>.
// Para uma melhor organização, faça commits a cada tarefa concluída. Vamos aos exercícios:

// 1 - Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body;
let header = document.createElement('h1');
header.innerText = 'Exercício 5.2 - JavaScript DOM';
document.body.appendChild(header);

// 2 - Adicione a tag div com a classe main-content como filho da tag body;
let mainContent = document.createElement('div');
mainContent.className = 'main-content';
document.body.appendChild(mainContent);

// 3 - Adicione a tag div com a classe center-content como filho da tag div criada no passo 2;
let centerContent = document.createElement('div');
centerContent.className = 'center-content';
mainContent.appendChild(centerContent);

// 4 - Adicione a tag p como filho do div criado no passo 3 e coloque algum texto;
let paragraph = document.createElement('p');
paragraph.innerText = 'Insira algum texto aqui.';
centerContent.appendChild(paragraph);

// 5 - Adicione a tag div com a classe left-content como filho da tag div criada no passo 2;
let leftContent = document.createElement('div');
leftContent.className = 'left-content';
mainContent.appendChild(leftContent);

// 6 - Adicione a tag div com a classe right-content como filho da tag div criada no passo 2;
let rightContent = document.createElement('div');
rightContent.className = 'right-content';
mainContent.appendChild(rightContent);

// 7 - Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image.
// Esse elemento deve ser filho do div criado no passo 5;
let image = document.createElement('img');
image.src = 'https://picsum.photos/200';
image.className = 'small-image';
leftContent.appendChild(image);

// 8 - Adicione uma lista não ordenada com os valores de 1 a 10 por extenso como valores da lista. 
// Essa lista deve ser filha do div criado no passo 6;
let unorderedList = document.createElement('ul');
rightContent.appendChild(unorderedList);
let values = ['Um', 'Dois', 'Três', 'Quatro', 'Cinco', 'Seis', 'Sete', 'Oito', 'Nove', 'Dez', ];
for (let i = 0; i < values.length; i += 1) {
    let itemList = document.createElement('li');
    itemList.innerText = values[i];
    unorderedList.appendChild(itemList);
}

// 9 - Adicione 3 tags h3 , todas sendo filhas do div criado no passo 2.
for (let i = 1; i <= 3; i += 1) {
    let descriptions = document.createElement('h3');
    descriptions.innerHTML = 'Mini header ' + i;
    mainContent.appendChild(descriptions);
}

// Agora que você criou muita coisa, vamos fazer algumas alterações e remoções:

// 1 - Adicione a classe title na tag h1 criada;
header.className = 'title';

// 2 - Adicione a classe description nas 3 tags h3 criadas;
let h3s = document.getElementsByTagName('h3');
for (let i = 0; i < h3s.length; i += 1) {
    h3s[i].className = 'description';
}

// 3 - Remova o div criado no passo 5 (aquele que possui a classe left-content). 
// Utilize a função .removeChild();
mainContent.removeChild(leftContent);

// 4 - Centralize o div criado no passo 6 (aquele que possui a classe right-content). 
// Dica: para centralizar, basta configurar o margin-right: auto do div;
rightContent.style.marginRight = 'auto';

// 5 - Troque a cor de fundo do elemento pai da div criada no passo 3 
// (aquela que possui a classe center-content ) para a cor verde;
centerContent.style.backgroundColor = 'green';

// 6 - Remova os dois últimos elementos ( nove e dez ) da lista criada no passo 8.
unorderedList.lastChild.remove();
unorderedList.lastChild.remove();
