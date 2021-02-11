import PropTypes from 'prop-types';
import { useRef } from 'react';

const Audio = ({
  title, zic,
}) => {
  const song = useRef();
  const playSong = () => {
    song.current.play();
  };
  return (
    <div>
      <button type="button" onClick={playSong}>play {title} !</button>
      <audio ref={song}>
        <source src={`songs/${zic}`} />
      </audio>

    </div>
  );
};

Audio.propTypes = {
  title: PropTypes.string,
  zic: PropTypes.string.isRequired,
  age: PropTypes.number,
};

Audio.defaultProps = {
  title: '',
  age: 0,
};

export default Audio;
