import "/src/css/Components/Carousel.css";
import { useState } from "react";

export default function Carousel({ data }) {
  // Image(s) pour le carousel
  // console.log(data[0]);
  // console.log(data.length);

  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === data.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? data.length - 1 : slide - 1);
  };

  if (data.length === 1) {
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
