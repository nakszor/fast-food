import "./minicard.css";

export default function MiniCard() {
  return (
    <li className="minicard">
      <div className="minicard-container">
        <div className="minicard-img"></div>
        <div className="minicard-content">
          <div className="x">
            <h3>Hamburguer</h3>
            <p>2x</p>
          </div>
          <p>Sanduíches</p>
        </div>
      </div>

      <button className="minicard-btn">Remover</button>
    </li>
  );
}
