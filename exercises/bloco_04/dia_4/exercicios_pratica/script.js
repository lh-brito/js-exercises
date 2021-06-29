// Parte I - Objetos e For/In

let info = {
    personagem: "Margarida",
    origem: "Pato Donald",
    nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
};

let info2 = {
    personagem: "Tio Patinhas",
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: "O último MacPatinhas",
    recorrente: 'Sim',
};

console.log ('Bem vinda, ' + info.personagem + '\n');

info['recorrente'] = 'Sim';

console.log (info);
console.log ('');

for (let index in info) {
    console.log(index);
}

console.log('');

for (let index in info) {
    console.log(info[index]);
}

console.log ('');

for (let index in info) {
    if (info[index] === info2[index]) {
        console.log ('Ambos ' + index + ('s'));
    }
    else {
    console.log (info[index] + ' e ' + info2[index]);
    }
}

// Parte II - Funções

console.log ('');

function checkPalindrome (word) {
    let reverse = word.split("").reverse().join("");
    let check = true;
    
    if (reverse !== word) {
        check = false;
    }

    console.log (check);
}

function greaterNumber (numbers) {
    console.log ('');
    let indexGreater = 0;

    for (let index in numbers) {
        if (numbers[indexGreater] < numbers[index]) {
            indexGreater = index;
        }
    }
    console.log (indexGreater);
}

function lesserNumber (numbers) {
    console.log ('');
    let indexLesser = 0;

    for (let index in numbers) {
        if (numbers[indexLesser] > numbers[index]) {
            indexLesser = index;
        }
    }
    console.log (indexLesser);
}

function greaterName (names) {
    console.log ('');
    let greaterName = names[0];

    for (let index in names) {
        if (greaterName.length < names[index].length) {
            greaterName = names[index];
        }
    }
    console.log (greaterName);
}

checkPalindrome ('bob');
greaterNumber ([2, 3, 6, 7, 10, 1]);
lesserNumber ([2, 4, 6, 7, 10, 0, -3]);
greaterName (['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']);
