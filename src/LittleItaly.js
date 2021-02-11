import {
  Route, BrowserRouter as Router, Switch, Link,
} from 'react-router-dom';
import Liste from './views/Liste';
import Home from './views/Home';
import Voyage from './views/Voyage';
import Fiche from './views/Fiche';
import './LittleItaly.css';
import Topic from './views/Topic';

const LittleItaly = () => (

  <Router>
    <header className="bg-blue-800 text-white">
      <Link to="/" className="red">accueil</Link> |
      <Link to="/voyage">voyage</Link> |
      <Link to="/fiche">fiche</Link> |
      <Link to="/liste">liste</Link>
    </header>
    <Switch>
      <Route path="/fiche/:index">
        <Fiche />
      </Route>
      <Route path="/voyage">
        <Voyage />
      </Route>
      <Route path="/liste">
        <Liste />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
    <footer>mon foooooooooooter</footer>
  </Router>

);

export default LittleItaly;
