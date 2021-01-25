import signes from './data/signes';

const getSign = (a) => {
  const b = (a - 4) % 12;
  return signes[b];
};

console.log(getSign(1910).nom);
