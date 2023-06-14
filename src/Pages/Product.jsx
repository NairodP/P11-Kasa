// import "/src/css/Pages/Product.css";
import { useParams } from "react-router-dom";
import jsonData from "/src/assets/data/data.json";
import Footer from "../Components/Footer.jsx";
import Error from "./Error.jsx";
import Carousel from "../Components/Carousel.jsx";
import Dropdown from "../Components/Dropdown.jsx";
import Rating from "../Components/Rating.jsx";
import "/src/css/Pages/Product.css";

export default function Product() {
  const data = jsonData;

  // Pour voir combien d'images contient chaque objet
  // console.log(data);
  // for (let i = 0; i < data.length; i++) {
  //   const obj = data[i];
  //   console.log(obj.pictures);
  // }

  const { locationId } = useParams();
  // console.log(useParams())
  const product = data.find((item) => item.id === locationId);
  // console.log(product);
  // console.log(product.pictures);
  if (product === undefined) {
    return <Error />;
  }
  const {
    title,
    pictures,
    description,
    host,
    rating,
    location,
    equipments,
    tags,
  } = product;

  const splitName = host.name.split(" ");

  return (
    <>
      <div className="body laptop">
        <Carousel data={pictures} />
        <br />
        <div className="informations">
          <div className="titleAndLocation">
            <h2>{title}</h2>
            <p>{location}</p>
          </div>
          <div className="host-informations">
            <div className="host-name">
              <p>{splitName[0]}</p>
              <p>{splitName[1]}</p>
            </div>
            <img src={host.picture} alt={host.name} />
          </div>
        </div>

        <div className="ratingAndTags">
          <Rating data={rating} />
          <div className="tags-container">
            {tags.map((item, index) => {
              return (
                <div className="tag" key={index}>
                  {item}
                </div>
              );
            })}
          </div>
        </div>
        <div className="dropdown-menu">
          <Dropdown title="Description" content={description} />
          <Dropdown
            title="Equipements"
            content={equipments.map((item, index) => {
              return <div key={index}>{item}</div>;
            })}
          />
        </div>
      </div>

      <div className="body mobile">
        <Carousel data={pictures} />
        <br />
        <div className="titleAndLocation">
          <h2>{title}</h2>
          <p>{location}</p>
        </div>
        <div className="tags-container">
          {tags.map((item, index) => {
            return (
              <div className="tag" key={index}>
                {item}
              </div>
            );
          })}
        </div>
        <div className="rateAndHost">
          <Rating data={rating} />
          <div className="host-informations">
            <div className="host-name">
              <p>{splitName[0]}</p>
              <p>{splitName[1]}</p>
            </div>
            <img src={host.picture} alt={host.name} />
          </div>
        </div>

        <div className="dropdown-menu">
          <Dropdown title="Description" content={description} />
          <Dropdown
            title="Equipements"
            content={equipments.map((item, index) => {
              return <div key={index}>{item}</div>;
            })}
          />
        </div>
      </div>
      <Footer />
    </>
  );
}
