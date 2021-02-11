const fetch = require('node-fetch');

fetch('https://raw.githubusercontent.com/ltruchot/es3-to-esnext-challenges/master/011-horoscope_chinois/signes.json')
  .then((data) => data.json()).then(console.log);
