import PropTypes from 'prop-types';

const FlexContainer = ({ children }) => (
  <div className="flex flex-wrap">
    {children}
  </div>
);

Audio.propTypes = {
  chidren: PropTypes.node,
};

Audio.defaultProps = {
  chidren: [<div>toto</div>],
};

export default FlexContainer;
