import "./minicard.css";

export default function MiniCard({ name, img, category }) {
  return (
    <li className="minicard">
      <div className="minicard-container">
        <div className="minicard-img">
          <img src={img} alt="imagem do produto no carrinho" />
        </div>
        <div className="minicard-content">
          <div className="x">
            <h3>{name}</h3>
            <p>2x</p>
          </div>
          <p>{category}</p>
        </div>
      </div>
      <button className="minicard-btn">Remover</button>
    </li>
  );
}
