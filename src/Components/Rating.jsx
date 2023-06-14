import "/src/css/Components/Rating.css";

export default function Rating({ data }) {
  // console.log("nombre d'étoiles : " + data);

  // renvoie le plus grand entier qui est inférieur ou égal à un nombre x (ici data).
  const fullStars = Math.floor(data);
  // console.log("fullStars : " + fullStars);

  // retourne le plus petit entier supérieur ou égal au nombre donné
  const emptyStars = 5 - Math.ceil(data);
  // console.log("emptyStars : " + emptyStars);

  return (
    <div className="rating">
      {[...Array(fullStars)].map((_, index) => (
        <img
          key={index}
          className="star"
          src="/src/assets/icons/starFull.svg"
          alt="Star"
        />
      ))}
      {[...Array(emptyStars)].map((_, index) => (
        <img
          key={index + fullStars}
          className="star"
          src="/src/assets/icons/starEmpty.svg"
          alt="Star"
        />
      ))}
    </div>
  );
}