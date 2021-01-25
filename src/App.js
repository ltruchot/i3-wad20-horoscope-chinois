import { useRef, useState } from 'react';
import signes from './data/signes';
import { getSign } from './helpers';
import Modal from './Modal';
import SigneChinois from './SigneChinois';

function App() {
  const [sign, setSign] = useState('Inconnu');
  const ipt = useRef();

  const signesComposants = signes.map((signe) => (
    <SigneChinois
      nom={signe.nom}
      cheminDeLImage={signe.img}
      desc={signe.description}
      key={signe.id}
    />
  ));

  const calculateSign = () => {
    const val = Number(ipt.current.value);
    const signeTrouve = getSign(val);
    setSign(signeTrouve);
  };

  const modalInfoAttributs = {
    type: 'info',
    visible: false,
  };

  const modalErrorAttributs = {
    type: 'error',
    visible: false,
  };

  return (
    <div>
      <div className="py-4">
        Quel est votre année de naissance ?
        <input className="bg-gray-200" ref={ipt} />
        <button className="bg-blue-800 text-white" onClick={calculateSign}>Réponse</button>{sign}
      </div>
      <div className="flex flex-wrap">
        {signesComposants}
      </div>

      <Modal close title="le titre de ma modale" {...modalInfoAttributs}>
        <div>lorem ipsum... </div>
        <form>
          <input />
          toto
        </form>
      </Modal>

      {/*
      <Modal title="le titre de ma modale" {...modalErrorAttributs}>
        <div>lorem ipsum... </div>
        <form>
          <input />
          toto
        </form>
      </Modal>
      */}
    </div>
  );
}

export default App;
