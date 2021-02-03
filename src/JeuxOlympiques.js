import { useState } from 'react';
import Pays from './Pays';

function JeuxOlympiques() {
  const [countries, setCountries] = useState([
    {
      name: 'France', flag: '[FR]', score: 3, id: 0,
    },
    {
      name: 'Belgique', flag: '[BE]', score: 0, id: 1,
    },
    {
      name: 'Laos', flag: '[LA]', score: 8, id: 2,
    },
  ]);

  const changeScore = (id) => {
    const copy = [...countries];
    copy[id].score++;
    setCountries(copy);
  };
  const getWinner = () => {
    const scores = countries.map((country) => country.score);
    const max = Math.max(...scores);
    return countries
      .filter((country) => country.score === max)
      .map((country) => country.name).join(', ');
  };

  const winner = getWinner();
  return (
    <div>
      <div className="flex">
        {countries.map((country) => (
          <Pays
            name={country.name}
            flag={country.flag}
            score={country.score}
            setter={() => changeScore(country.id)}
          />
        ))}
        {/*
        <Pays name={countries[0].name} flag={countries[0].flag} score={scoreFR} setter={setScoreFR} />
        <Pays name={countries[1].name} flag={countries[1].flag} score={scoreBE} setter={setScoreBE} />
        <Pays name={countries[2].name} flag={countries[2].flag} score={scoreLA} setter={setScoreLA} />
          */}

      </div>
      Le meilleur, c'est vraiment: {winner}
    </div>
  );
}

export default JeuxOlympiques;
