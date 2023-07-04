import "./total.css";
export default function Total() {
  return (
    <div className="total">
      <div className="total-container">
        <p className="total-p">Total</p>
        <p className="value">R$40,00</p>
      </div>
      <button className="total-btn">Remover todos</button>
    </div>
  );
}
