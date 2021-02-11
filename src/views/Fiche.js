import { useParams } from 'react-router-dom';

const villes = [{
  nom: 'Rome',
  slug: 'rome',
  description: 'une très belle ville',
  photo: '/img/2.jpg',
},
{
  nom: 'Florence',
  slug: 'florence',
  description: 'une très belle ville aussi',
}];

const Fiche = () => {
  const { index } = useParams();
  const infos = villes[index];

  return (
    <div>
      {infos ? (
        <div>Fiche:
          <h2>{infos.nom}</h2>
          <p>{infos.description}</p>
          <img src={infos.photo} />
        </div>
      ) : <div>Cette ville n'existe pas</div>}
    </div>
  );
};
export default Fiche;
