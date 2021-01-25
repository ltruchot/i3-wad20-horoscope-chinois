function SigneChinois({
  nom, cheminDeLImage, desc,
}) {
  return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 bg-red-800 text-white">
      <h2>{nom}</h2>
      <img src={`img/${cheminDeLImage}`} alt={`${nom} et ideogramme`} />
      <p>
        {desc}
      </p>
    </div>

  );
}
export default SigneChinois;
