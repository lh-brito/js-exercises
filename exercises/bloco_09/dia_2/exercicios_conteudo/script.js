const fetch = require('node-fetch');

const verifiedFetch = async (url) => {
  if (url === 'https://api.chucknorris.io/jokes/random?category=dev')
    return fetch(url)
      .then((r) => r.json())
      .then((r) => (r.value));
  throw new Error('endpoint não existe');
};

const sendJokeToFriend = async (name) => {
  const message = await verifiedFetch('https://api.chucknorris.io/jokes/random?category=dev')
    .then((joke) => `Oi ${name}, ouve essa: ${joke}`)
    .catch((err) => err);
  console.log(message);
};

sendJokeToFriend("Anna");
