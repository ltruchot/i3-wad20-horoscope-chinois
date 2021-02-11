import { useEffect, useState, useRef } from 'react';

const Toto = (props) => {
  // hooks
  const toto = useRef();
  const [salutation, setSalutation] = useState('bonjour');
  const [smiley, setSmiley] = useState(':)');

  // pure
  const handleClick = () => {
    setSalutation(salutation === 'bonjour' ? 'aurevoir' : 'bonjour');
    setSmiley(salutation === 'bonjour' ? ':)' : ':(');
    toto.current.style.backgroundColor = 'green';
    toto.current.innerText = 'youplaboum';
  };

  return (
    <div>
      <div onClick={handleClick}>{salutation} {props.str} {smiley}</div>
    </div>
  );
};

export default Toto;
