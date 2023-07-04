import "./cards.css";
import Button from "../../button/button";
export default function Card({ name, price, img, category }) {
  return (
    <li className="card">
      <div className="card-img-div">
        <img className="card-img" src={img} alt="imagem do produto" />{" "}
      </div>
      <div className="card-content">
        <h3>{name}</h3>
        <p>{category}</p>
        <p className="card-price">{price}</p>
        <Button text={"Adicionar"} />
      </div>
    </li>
  );
}
