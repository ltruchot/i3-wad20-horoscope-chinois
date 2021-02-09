import fetch from 'node-fetch';
import { useEffect, useRef, useState } from 'react';
// import signes from './data/signes';
import { getSign } from './helpers';
import Modal from './Modal';
import SigneChinois from './SigneChinois';

function App() {
  const [signes, setSignes] = useState([]);
  const [sign, setSign] = useState('Inconnu');
  const [signIndex, setSignIndex] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);

  const ipt = useRef();

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/ltruchot/es3-to-esnext-challenges/master/011-horoscope_chinois/signes.json')
      .then((res) => res.json())
      .then((data) => setSignes(data));
  }, []);

  const signesComposants = signes.length > 0 ? signes.map((signe) => (
    <SigneChinois
      nom={signe.nom}
      cheminDeLImage={signe.img}
      desc={signe.description}
      key={signe.id}
    />
  )) : 'loading...';

  const calculateSign = () => {
    const val = Number(ipt.current.value);
    const idx = getSign(val);
    setSignIndex(idx);
    setSign(signes[idx].nom);
    setModalVisible(true);
  };

  return (
    <div>
      <div className="py-4">
        Quelle est votre année de naissance ?
        <input className="bg-gray-200" ref={ipt} />
        <button className="bg-blue-800 text-white" onClick={calculateSign}>Réponse</button>{sign}
      </div>
      <div className="flex flex-wrap">
        {signesComposants}
      </div>

      { signes[signIndex] ? (
        <Modal close title="le titre de ma modale" visible={modalVisible} hideModal={() => setModalVisible(false)}>
          <h2>{sign}</h2>
          <p>{signes[signIndex].description}</p>
        </Modal>
      ) : null }

    </div>
  );
}

export default App;
