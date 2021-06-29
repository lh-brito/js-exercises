/* Para praticar, crie uma função que receba três parâmetros, sendo eles: 
um objeto, o nome de uma chave e o seu valor. 
O retorno dessa função deve ser o objeto já com a nova chave adicionada nele. */

const user = (obj, key, val) => {
    obj[key] = val; 
    return obj;
};

console.log(user({
    firstName: 'Lucas',
    age: 23,
    occupation: 'Student',
}, 'lastName', 'Brito'));

/* Crie uma função que exiba as habilidades do objeto student. 
Cada habilidade deve ser exibida no formato "Nome da habilidade, Nível: valor da chave referente à habilidade". 
Após tentar criar a função, veja a sugestão de resposta logo abaixo e compare com a sua solução.*/

const student1 = {
    Html: 'Muito Bom',
    Css: 'Bom',
    JavaScript: 'Ótimo',
    SoftSkills: 'Ótimo',
};

const student2 = {
    Html: 'Bom',
    Css: 'Ótimo',
    JavaScript: 'Ruim',
    SoftSkills: 'Ótimo',
    Git: 'Bom', // chave adicionada
};

const studentSkills = student => {
    const skillsArray = Object.keys(student);
    for (let i in skillsArray) console.log(`${skillsArray[i]}, Nivel: ${student[skillsArray[i]]}`);
};

console.log('\nEstudante 1');
studentSkills(student1);

console.log('\nEstudante 2');
studentSkills(student2);
