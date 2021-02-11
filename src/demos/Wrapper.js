import Toto from './Toto';

const Wrapper = () => (
  <div>
    {[
      'les wad20',
      'les web9',
      'les omi11',
      'les omi11',
      'les wad21',
      'les web10',
    ].map((str) => <Toto str={str} />)}
  </div>
);

export default Wrapper;
