const fetch = require('node-fetch');

const timeout = () => new Promise((resolve) => {
  setTimeout(() => {
    console.log('coucou maman');
    resolve();
  }, 2000);
});
timeout()
  .then(timeout)
  .then(() => console.log('I love my job'));

fetch('https://randomuser.me/api/')
  .then((res) => res.json())
  .then((data) => fetch(`https://v2.namsor.com/NamSorAPIv2/api2/json/origin/${data.results[0].name.first}/${data.results[0].name.last}`, {
    headers: {
      'X-API-KEY': 'a5c774ee776b81724eba81e1e625e449',
    },
  }))
  .then((res) => res.json())
  .then(console.log);
