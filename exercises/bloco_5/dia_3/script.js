function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');

    for (let index = 0; index < weekDays.length; index += 1) {
        const days = weekDays[index];
        const dayListItem = document.createElement('li');
        dayListItem.innerHTML = days;

        weekDaysList.appendChild(dayListItem);
    };
};
  
createDaysOfTheWeek();

// Escreva seu código abaixo.

/* 
Exercício 1:
O array dezDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. 
Desenvolva uma função que crie dinamicamente cada dia do calendário e os adicione como filhos/filhas da tag <ul> com ID "days".
Note que os dias 29 e 30 de novembro estão no array pois representam respectivamente Domingo e Segunda-feira.
    * Os dias devem estar contidos em uma tag <li> , e todos devem ter a classe day . Ex: <li class="day">3</li>
    * Os dias 24, 25 e 31 são feriados e, além da classe day , devem conter também a classe holiday . Ex: <li class="day holiday">24</li>
    * Os dias 4, 11, 18 e 25 são Sexta-feira. Eles devem conter a classe day e a classe friday . Ex: <li class="day friday">4</li> 
*/

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function dezDays () {
    for (let i = 0; i < dezDaysList.length; i += 1) {
        let day = document.createElement('li');
        day.innerText = dezDaysList[i];
        day.className = 'day';
        if (dezDaysList[i] === 4 || dezDaysList[i] === 11 || dezDaysList[i] === 18){
            day.className = 'day friday';
        }
        if (dezDaysList[i] === 24 || dezDaysList[i] === 31) {
            day.className = 'day holiday';
        }
        if (dezDaysList[i] === 25) {
            day.className = 'day holiday friday';
        }
        document.getElementById('days').appendChild(day);
    }
}

dezDays ();

/* 
Exercício 2:
Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".
    * Adicione a este botão a ID "btn-holiday".
    * Adicione este botão como filho/filha da tag <div> com classe "buttons-container".
*/

function holidays (string) {
    let buttonHoliday = document.createElement('button');
    buttonHoliday.innerHTML = string;
    buttonHoliday.id = 'btn-holiday';
    document.querySelector('.buttons-container').appendChild(buttonHoliday);
}

holidays ('Feriados');

/*
Exercício 3:
Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday" .
    * É interessante que este botão possua também a lógica inversa. 
    Ao ser clicado novamente ele retorna à configuração inicial com a cor "rgb(238,238,238)". 
*/

function backgroundColorHolidays() {
    let holidays = document.getElementsByClassName('holiday');
    for (let i = 0; i < holidays.length; i += 1) {
        if (holidays[i].style.backgroundColor === 'white') {
            holidays[i].style.backgroundColor = 'rgb(238,238,238)';
        }
        else {
            holidays[i].style.backgroundColor = 'white';
        }
    }
}

document.querySelector('#btn-holiday').addEventListener('click', backgroundColorHolidays);

/*
Exercício 4:
Implemente uma função que receba como parâmetro a string "Sexta-feira" e crie dinamicamente um botão com o nome "Sexta-feira".
    * Adicione a este botão o ID "btn-friday" .
    * Adicione este botão como filho/filha da tag <div> com classe "buttons-container".
*/

function fridays (friday) {
    let buttonFriday = document.createElement('button');
    buttonFriday.innerHTML = friday;
    buttonFriday.id = 'btn-friday';
    document.querySelector('.buttons-container').appendChild(buttonFriday);
}

fridays ('Sexta-feira');

/*
Exercício 5:
Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" que modifica o texto exibido nos dias que são Sexta-feira.
    * É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial exibindo os dias.
*/

function modifyTextFriday() {
    let fridays = document.getElementsByClassName('friday');
    let dezFridays = [ 4, 11, 18, 25 ];
    for (let i = 0; i < fridays.length; i += 1) {
        if (fridays[i].innerHTML === 'SEXTOU o/') {
            fridays[i].innerHTML = dezFridays[i];
        }
        else {
            fridays[i].innerHTML = 'SEXTOU o/';
        }
    }
}

document.querySelector('#btn-friday').addEventListener('click', modifyTextFriday);

/*
Exercício 6:
Implemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.
    * Dica - Propriedade: event.target.
*/

let days = document.getElementById('days');

function zoomDay(day) {
    day.target.style.fontSize = '30px';
    day.target.style.fontWeight = '600';
}

function unZoomDay(day) {
    day.target.style.fontSize = '20px';
    day.target.style.fontWeight = '200';
}

days.addEventListener('mouseover', zoomDay);
days.addEventListener('mouseout', unZoomDay);

/*
Exercício 7:
Implemente uma função que adiciona uma tarefa personalizada ao calendário. 
A função deve receber como parâmetro a string com o nome da tarefa (ex: "cozinhar") 
e criar dinamicamente um elemento com a tag <span> contendo a tarefa.
O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks".
*/

function newTaskSpan (taskName) {
    let task = document.createElement('span');
    task.innerText = taskName;
    document.getElementsByClassName('my-tasks')[0].appendChild(task);
}

newTaskSpan ('Projeto:');

/*
Exercício 8:
Implemente uma função que adiciona uma legenda com cor para a tarefa criada no exercício anterior. 
Esta função deverá receber como parâmetro uma string ("cor") e criar dinamicamente um elemento de tag <div> com a classe task.
O parâmetro cor deverá ser utilizado como cor de fundo da <div> criada.
O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks".
*/

function newTaskDiv (color) {
    let taskCustom = document.createElement('div');
    taskCustom.className = 'task';
    taskCustom.style.backgroundColor = color;
    document.getElementsByClassName('my-tasks')[0].appendChild(taskCustom);
}

newTaskDiv ('green');

/*
Exercício 9:
Implemente uma função que adiciona um evento que ao clicar no elemento com a tag <div> referente a cor da sua tarefa, 
atribua a este elemento a classe task selected , ou seja, quando sua tarefa possuir a classe task selected ela estará selecionada.
Ao clicar novamente no elemento a sua classe deverá voltar a ser somente task, 
ou seja, esta tarefa está deixando de ser uma tarefa selecionada.
*/

let task = document.getElementsByClassName('task')[0];
let taskClass = task.className;

function taskSelection () {
    if (taskClass === 'task selected') {
        taskClass = 'task';
    } else {
        taskClass = 'task selected';
    }   
}

task.addEventListener('click', taskSelection);

/*
Exercício 10:
Implemente uma função que adiciona um evento que ao clicar em um dia do mês no calendário, 
atribua a este dia a cor da legenda da sua tarefa selecionada.
Ao clicar novamente no dia com a cor da legenda, a sua cor deverá voltar à configuração inicial rgb(119,119,119).
*/

function taskDayColor (day) {
    let color = task.style.backgroundColor;
    let dayTargetColor = day.target.style.color;
    let taskDiv = document.querySelector('.task');
    let taskColor = taskDiv.style.backgroundColor;

    if (taskClass === 'task selected') {
        if (dayTargetColor !== taskColor) {
            day.target.style.color = color;
        } else if (dayTargetColor === taskColor) {
            day.target.style.color = 'rgb(119,119,119)';
        }
    }
}

days.addEventListener('click', taskDayColor);

/*
Bônus:
Vamos adicionar compromissos ao seu calendário? Implemente uma função que, 
ao digitar um compromisso na caixa de texto "COMPROMISSOS", adiciona o item à lista "MEUS COMPROMISSOS" ao clicar no botão "ADICIONAR".
Se nenhum caractere for inserido no campo input , a função deve retornar um alert com uma mensagem de erro ao clicar em "ADICIONAR".
Ao pressionar a tecla "enter" o evento também deverá ser disparado.
Dica - Propriedade: keyCode.
*/
