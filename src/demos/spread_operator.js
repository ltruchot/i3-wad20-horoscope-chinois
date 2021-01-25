// spread operator dans le JSX
const attrs = {
  className: 'toto',
  disabled: true,
  title: "c'est génial",
};

// en jsx ensuite: <div toto="titi" {...attrs} coucou="yo" />;

const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5, 6];

Math.max(3, 5, 78, 23, 3);
Math.max(...arr2);

const obj1 = {
  nom: 'truchot',
};

const loic = {
  prenom: 'loic',
  ...obj1,
  age: 35,
};
