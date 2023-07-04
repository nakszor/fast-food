import "./cards.css";

export default function Card({
  name,
  price,
  img,
  category,
  id,
  callbackCards,
}) {
  return (
    <li className="card">
      <div className="card-img-div">
        <img className="card-img" src={img} alt="imagem do produto" />
      </div>
      <div className="card-content">
        <h3>{name}</h3>
        <p>{category}</p>
        <p className="card-price">
          {price.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </p>
        <button
          type="button"
          text={"Adicionar"}
          onClick={() => callbackCards(name, img, price, category, id)}
        >
          Adicionar
        </button>
      </div>
    </li>
  );
}
