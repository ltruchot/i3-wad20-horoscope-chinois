import { useState } from 'react';

const Toto = () => {
  const [x, setX] = useState('yo');
  const toto = 3;
  return (
    <div onClick={() => setX()}>toto {}</div>
  );
};

Toto();
