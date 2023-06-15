import "/src/css/Components/Rating.css";

export default function Rating({ data }) {
  // console.log("nombre d'étoiles : " + data);

  // Renvoie le plus grand entier qui est inférieur ou égal à un nombre x (ici data)
  // Représente le nombre d'étoiles pleines dans la notation
  const fullStars = Math.floor(data);
  // console.log("fullStars : " + fullStars);

  // Retourne le plus petit entier supérieur ou égal au nombre donné
  // Représente le nombre d'étoiles vide dans la notation
  const emptyStars = 5 - Math.ceil(data);
  // console.log("emptyStars : " + emptyStars);

  return (
    <div className="rating">
      {/* Génération des étoiles pleines */}
      {/* Array(n) créé un tableau vide de longueur 'n'. Avec le spread operator on étend ce tableau vide en tant qu'éléments distincts d'un nouvel tableau. [...Array(3)] générera un tableau contenant 3 éléments vides ([undefined, undefined, undefined]). On itère ensuite sur ce nouveau tableau en utilsant map. */}
      {[...Array(fullStars)].map((_, index) => (
        <img
          key={index}
          className="star"
          src="/src/assets/icons/starFull.svg"
          alt="Star"
        />
      ))}
      {/* Génération des étoiles vides */}
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