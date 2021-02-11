const Pays = ({
  name, score, flag, setter,
}) => (
  <div>
    {name}<br />
    <button type="button" onClick={() => setter()}>{flag}</button><br />
    {score}
  </div>
);

export default Pays;
