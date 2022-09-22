const ShowCard = ({ movie }) => {
  const { image, name, language } = movie.show;

  return (
    <div className="w-48 m-4">
      <figure className="rounded-md overflow-hidden">
        <img src={image.medium} alt={name} />
      </figure>
      <div className="flex justify-between items-center my-3">
        <h3 className="font-semibold ">{name}</h3>
        <small className="rounded-full text-cyan-100">{language}</small>
      </div>
    </div>
  );
};

export default ShowCard;
