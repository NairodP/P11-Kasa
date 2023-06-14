import "/src/css/Components/MainContainer.css";
import jsonData from "/src/assets/data/data.json";
import { Link } from "react-router-dom";

const data = jsonData;

export default function MainContainer() {
  return (
    <div className="grid-container">
      {data.map((item, index) => {
        return (
          <Link to={`/location/${item.id}`} key={index}>
            <div className="box">
              <img src={item.cover} alt={item.title} />
              <div className="box-title">{item.title}</div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
