const fetchURL = () => 
  fetch('https://ghibliapi.herokuapp.com/species').then((r) =>
    r.json()
    .then((json) => r.ok ? Promise.resolve(json) : Promise.reject(json)));

module.exports = { fetchURL };
