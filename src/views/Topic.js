import { useParams } from 'react-router-dom';

const Topic = () => {
  const { ville } = useParams();
  return (
    <p>
      <h3>Requested topic: {ville} </h3>
    </p>
  );
};

export default Topic;
