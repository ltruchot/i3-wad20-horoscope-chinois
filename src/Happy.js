import { useState } from 'react';

const compose = (f, g) => (x) => f(g(x));

const Happy = () => {
  const [happy, setHappy] = useState('😁');
  const animaux = ['🐶', '🐱', '🐭', '🐹', '🐰', '🦊', '🐻', '🐼', '🐨', '🐯', '🦁', '🐮'];
  const getRandomInArray = (arr) => arr[Math.floor(Math.random() * arr.length)];
  const setAnimal = compose(setHappy, getRandomInArray);

  return (
    <div onClick={() => setAnimal(animaux)}>
      {happy}
    </div>
  );
};
export default Happy;
