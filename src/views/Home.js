import { Link } from 'react-router-dom';

const Home = () => (
  <div>
    <img src="img/1.jpg" />
    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo nihil sed illo, corporis temporibus officiis provident fuga delectus adipisci praesentium, recusandae itaque voluptate fugiat ab vero doloribus molestias magni voluptatum.</div>
    <Link to="/fiche">Faisons ce magnifique voyage</Link>
  </div>
);
export default Home;
