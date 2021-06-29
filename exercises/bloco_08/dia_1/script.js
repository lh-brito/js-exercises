/* 
    1. Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada.
    Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id. A sua
    função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um
    email no formato nome_da_pessoa@trybe.com .

    Exemplos:
    id1: '', // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: '', // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas 
    id3: '', // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
*/

const createEmp = (fullName) => ({
    fullName,
    email: `${fullName}@trybe.com`.toLowerCase().replace(' ', '_'),
});

const newEmployees = (create) => {
    const employees = {
        id1: create('Pedro Guerra'),
        id2: create('Luiza Drumond'),
        id3: create('Carla Paiva'),
    }
    return employees;
};

console.log('1.', newEmployees(createEmp), '\n');

/* 
    2. Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5
    recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. 
    O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").
*/

const draw = () => Math.ceil(Math.random() * 5);

const drawResult = (result, num) => num === result ? `Parabéns: ${num}` : `Tente novamente: ${num}`;

console.log('2.', drawResult(3, draw()), '\n');

/* 
    3. Crie uma HOF utilizando o conceito de currying . Passe como parâmetros a resposta correta (Ex: Gabarito) para uma
    pergunta e uma resposta a ser validada (Ex: Resposta de uma pessoa). Sua HOF deve checar se a resposta enviada pela
    pessoa usuária é correta. Se for, a função retorna true , se não for, a função retorna false .

    * A validação da resposta não deve ser case sensitive.
    * Deve ser possível chamar a HOF criada de forma encadeada (Ex: checarResposta('Gabarito')('Teste'))
    
    Sugestão de respostas a serem validadas:
    * const correctAnswer = 'higher order function';
    * const userAnswer = 'HIGHER ORDER FUNCTION';
*/

const answer = (correctAnsw) => (userAnsw) => userAnsw.toLowerCase() === correctAnsw.toLowerCase();

console.log('3.', answer('higher order function')('HIGHER ORDER FUNCTION'), '\n');

/* 
    4. Crie uma HOF que receberá três parâmetros. O primeiro será um array de respostas corretas (Gabarito), o segundo será
    um array de respostas a serem verificadas (respostas da pessoa estudante) e o terceiro é uma função que checa se as
    respostas estão corretas e faz a contagem da pontuação final recebida pela pessoa estudante. Ao final a HOF deve
    retornar o total da contagem de respostas certas.
    
    * Quando a resposta for correta a contagem sobe 1 ponto, quando for incorreta desce 0.5 pontos, e quando não houver
    resposta ("N.A") não altera-se a contagem.

    Exemplo:
    const rightAnswers = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
    const studentAnswers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];
*/

const compare = (x, y) => x === y;

const template = (rightAnswers, studentAnswers, scan) => {
    let total = 0;
    for(let i = 0; i < rightAnswers.length; i += 1) {
        if(studentAnswers[i] !== 'N.A') total += scan(rightAnswers[i], studentAnswers[i]) ? 1 : 0.5;
    }
    return total;
};

console.log('4.', template (['A', 'C'  , 'B', 'D', 'A', 'A', 'D'  , 'A', 'D', 'C'], 
                            ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'], compare), '\n');
