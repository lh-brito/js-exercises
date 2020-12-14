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
O array dezDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Desenvolva uma função que crie dinamicamente cada dia do calendário e os adicione como filhos/filhas da tag <ul> com ID "days" . Note que os dias 29 e 30 de novembro estão no array pois representam respectivamente Domingo e Segunda-feira.
    * Os dias devem estar contidos em uma tag <li> , e todos devem ter a classe day . Ex: <li class="day">3</li>
    * Os dias 24, 25 e 31 são feriados e, além da classe day , devem conter também a classe holiday . Ex: <li class="day holiday">24</li>
    * Os dias 4, 11, 18 e 25 são Sexta-feira. Eles devem conter a classe day e a classe friday . Ex: <li class="day friday">4</li> 
*/

function dezDays (dezDaysList) {
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

dezDays ([29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]);

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
    * É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial com a cor "rgb(238,238,238)". 
*/

function backgroundColorHolidays() {
    let holidays = document.getElementsByClassName('holiday');
    for (let i = 0; i < holidays.length; i += 1) {
        if (holidays[i].style.backgroundColor === 'yellow') {
            holidays[i].style.backgroundColor = 'rgb(238,238,238)';
        }
        else {
            holidays[i].style.backgroundColor = 'yellow';
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

function fridays (string) {
    let buttonFriday = document.createElement('button');
    buttonFriday.innerHTML = string;
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
        if (fridays[i].innerHTML === 'Sextou') {
            fridays[i].innerHTML = dezFridays[i];
        }
        else {
            fridays[i].innerHTML = 'Sextou';
        }
    }
}

document.querySelector('#btn-friday').addEventListener('click', modifyTextFriday);
