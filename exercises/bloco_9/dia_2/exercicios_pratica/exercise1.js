// 1. Como primeiro exercício, vamos usar a função fetch , que vimos na aula ao vivo, 
// para criar um site simples com um gerador de piadas ruins! . Como? Vamos praticar!

// Agora vamos tentar fazer as requisições a API usando fetch . Essa função recebe dois parâmetros:
// * 1. O endereço para o qual a requisição será feita, ou seja, a url do serviço.
// * 2. Um objeto contendo as especificações da requisição. Para essa API , 
// * atribuiremos a esse objeto as chaves method e headers

// Recebemos um objeto, certo? A partir daí, faça a piada aparecer no DOM da sua página!

// apiScript.js     
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = async () =>
  await fetch(API_URL, { headers: { 'Accept': 'application/json' } })
    .then((response) => response.json())
    .then((data) => document.querySelector('#jokeContainer').innerHTML = data.joke);

window.onload = () => fetchJoke();
