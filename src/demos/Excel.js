import { useRef, useState } from 'react';
import Audio from './Audio';

const Excel = () => {
  const [somme, setSomme] = useState(0);
  const val1 = useRef();
  const val2 = useRef();
  const doSum = () => {
    setSomme(Number(val1.current.value) + Number(val2.current.value));
  };
  return (
    <div>
      <Audio title="butifoul laïfe" zic="bl.mp3" />
      <Audio zic="bl.mp3" />

      <input
        ref={val1}
        type="number"
        onInput={doSum}
        className="bg-gray-200 m-4"
      />

      <input
        onInput={doSum}
        ref={val2}
        type="number"
        className="bg-gray-200 m-4"
      />

      <div>{somme}</div>
    </div>
  );
};
export default Excel;
