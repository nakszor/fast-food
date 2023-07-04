import "./minicard.css";

export default function MiniCard({
  name,
  img,
  category,
  callBackDelete,
  position,
  repeat,
}) {
  return (
    <li className="minicard">
      <div className="minicard-container">
        <div className="minicard-img">
          <img
            className="img-minicards"
            src={img}
            alt="imagem do produto no carrinho"
          />
        </div>
        <div className="minicard-content">
          <div className="x">
            <h3>{name}</h3>
          </div>
          <p>{category}</p>
          <p className="hidden">{repeat}</p>
        </div>
      </div>
      <button className="minicard-btn" onClick={() => callBackDelete(position)}>
        Remover
      </button>
    </li>
  );
}
