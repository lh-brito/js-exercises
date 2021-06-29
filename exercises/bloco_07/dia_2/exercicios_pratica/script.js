// Parte I

const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        margherita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        }
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        }
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      }
    },
    payment: {
      total: 60,
    },
};

/* 1. Complete a função customerInfo() para que seu retorno seja similar a:
"Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701".
* Note que o parâmetro da função já está sendo passado na chamada da função. */

const customerInfo = order => {
    const deliverer = order.order.delivery.deliveryPerson;
    const customer = order.name;
    const phone = order.phoneNumber;
    const street = order.address.street;
    const number = order.address.number;
    const apartment = order.address.apartment;
    console.log(`Olá ${deliverer}, entrega para: ${customer}, Telefone: ${phone}, R. ${street}, Nº: ${number}, AP: ${apartment}.`);
};

customerInfo(order);

/* 2. Complete a função orderModifier() para que seu retorno seja similar a:
"Olá Luiz Silva, o total do seu pedido de margherita,pepperoni e Coca-Cola Zero é R$ 50,00."
* Modifique o nome da pessoa compradora.
* Modifique o valor total da compra para R$ 50,00.  */

const orderModifier = order => {
    const customer = order.name = 'Luiz Silva';
    const pizzas = Object.keys(order.order.pizza);
    const drinks = order.order.drinks.coke.type;
    const totalCost = order.payment.total = 50;
    console.log(`Olá ${customer}, o total do seu pedido de ${pizzas} e ${drinks} é R$ ${totalCost},00.`);
};

orderModifier(order);

// Parte II

const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
};

const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
};

const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
};

/* 1. Crie uma função para adicionar o turno da manhã na lesson2 . Essa função deve possuir três parâmetros, 
sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela. */

const addMorningPeriod = (obj, key, val) => obj[key] = val;

addMorningPeriod(lesson2, 'turno', 'manhã');

// 2. Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.

const listKeys = obj => Object.keys(obj);

console.log(listKeys(lesson2));

// 3. Crie uma função para mostrar o tamanho de um objeto.

const objectLength = obj => Object.keys(obj).length;

console.log(objectLength(lesson1));

// 4. Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.

const listValues = obj => Object.values(obj);

console.log(listValues(lesson3));

/* 5. Crie um objeto de nome allLessons, que deve agrupar todas as aulas através do Object.assign.
Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2 e lesson3. */

const allLessons = Object.assign ({}, { lesson1, lesson2, lesson3 });

console.log(allLessons);

// 6. Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.

const allStudents = obj => {
    let total = 0;
    const lessons = Object.keys(obj);
    for (let i in lessons) total += obj[lessons[i]].numeroEstudantes;
    return `Número total de estudantes: ${total}`;
};

console.log(allStudents(allLessons));

/* 7. Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto. Por exemplo: 

console.log(getValueByNumber(lesson1, 0));
// Output: 'Matématica' */

const getValueByNumber = (obj, num) => Object.values(obj)[num];

console.log(getValueByNumber(lesson1, 0));

/* 8. Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, 
sendo eles: o objeto, o nome da chave e o valor da chave. Exemplo:

console.log(verifyPair(lesson3, 'turno', 'noite'));
// Output: true,

console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));
// Output: false */

const verifyPair = (obj, key, val) => {
  const entries = Object.entries(obj);
  let result = false;
  for(let i in entries) if(entries[i][0] === key && entries[i][1] === val) result = true;
  return result;
};

console.log(verifyPair(lesson3, 'turno', 'noite'));

// Bônus

// 1. Crie uma função para contar quantos estudantes assistiram às aulas de Matemática. Use o objeto criado no exercício 5.

const howMuchStudents = obj => {
  let total = 0;
  const lesson = 'Matemática'
  const keys = Object.keys(obj);
  for(let i in keys) {
    if(obj[keys[i]].materia === lesson) {
      total += obj[keys[i]].numeroEstudantes;
    } 
  }
  return `Alunos que assistiram a aula de ${lesson}: ${total}`;
};

console.log(howMuchStudents(allLessons));

/* 2. Crie uma função que deverá retornar um objeto que representa o relatório do professor ou professora, 
as aulas que ele ou ela ministrou e o número total de estudantes. Use o objeto criado no exercício 5: 

console.log(createReport(allLessons, 'Maria Clara'))

// console: 
{
    professor: 'Maria Clara',
    aulas: [ 'Matemática', 'Matemática' ],
    estudantes: 30
} */