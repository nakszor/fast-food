import "./cards.css";
import Button from "../../button/button";
export default function Card() {
  return (
    <li className="card">
      <div className="card-img"></div>
      <div className="card-content">
        <h3>Hamburguer</h3>
        <p>Sanduíches</p>
        <p className="card-price">R$14,00</p>
        <Button text={"Adicionar"} />
      </div>
    </li>
  );
}
