import "/src/css/Components/Carousel.css";
import { useState } from "react";

export default function Carousel({ data }) {
  // Image(s) pour le carousel
  // console.log(data[0]);
  // console.log(data.length);

  const [slide, setSlide] = useState(0);
  // console.log(slide + 1);
  // console.log(data.length);

  const nextSlide = () => {
    setSlide(slide === data.length - 1 ? 0 : slide + 1);
  };
  // Vérifie si le slide actuel est le dernier dans le tableau
  // Si oui, passe au premier slide (index 0)
  // Sinon, passe au slide suivant en incrémentant l'index

  const prevSlide = () => {
    setSlide(slide === 0 ? data.length - 1 : slide - 1);
  };
  // Vérifie si le slide actuel est le premier dans le tableau
  // Si oui, passe au dernier slide en utilisant l'index correspondant
  // Sinon, passe au slide précédent en décrémentant l'index

  // Vérifier si le tableau de données ne contient qu'une seule image
  if (data.length === 1) {
    // Si c'est le cas, afficher uniquement cette image
    return (
      <div className="carousel-container">
        <div className="carousel">
          <img
            src={data[0]}
            alt="Image de présentation de la location"
            className="slide"
          />
        </div>
      </div>
    );
  } else {
    // Sinon, afficher le carousel complet avec les boutons de navigation
    return (
      <div className="carousel-container">
        <div className="carousel">
          <button className="chevron-button left-button" onClick={prevSlide}>
            <img
              src="/src/assets/icons/chevronLeftStrict.png"
              alt="Previous"
              className="chevron chevron-left"
            />
          </button>
          {data.map((item, index) => {
            return (
              <img
                src={item}
                alt={item}
                key={index}
                className={slide === index ? "slide" : "slide slide-hidden"}
              />
            );
          })}
          {/* La classe de <img> est déterminée en fonction de l'index de la slide actuelle "slide" par rapport à l'index de l'élément en cours de génération "index". Si les deux indices sont égaux (slide === index), la classe slide est appliquée, sinon la classe slide-hidden est appliquée ce qui permet d'avoir à l'écran uniquement la slide avec l'index actuel. */}
          <span className="indexSlide">{slide+1}/{data.length}</span>
          
          <button className="chevron-button right-button" onClick={nextSlide}>
            <img
              src="/src/assets/icons/chevronRightStrict.png"
              alt="Next"
              className="chevron chevron-right"
            />
          </button>
        </div>
      </div>
    );
  }
}
