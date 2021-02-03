import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Happy from './Happy';

import JeuxOlympiques from './JeuxOlympiques';
/*
const audio = new Audio('song-instrumental.mp3');
audio.play();
*/

ReactDOM.render(
  <React.StrictMode>

    <JeuxOlympiques />

    {/*
    // RDV 10h45
    // pour que ça marche: UseState
    // creer un composant "Happy.js"
    // il exporte par défault la fonction "Happy" qui retourn du JSX
    // ce JSX est un emoticon de personnage qui souris
    // qd on clic sur sa face: il se met à pleurer
    // bonus: qd on reclick il nous resouris
    // bonus: en fait les emoticons sont des animaux
    // qd on click sur l'animal, un autre est pioché au hasard et nous est montré
    */}

  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
