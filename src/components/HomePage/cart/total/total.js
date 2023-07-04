import "./total.css";
export default function Total({ sum, setCurrentSale }) {
  return (
    <div className="total">
      <div className="total-container">
        <p className="total-p">Total</p>
        <p className="value">
          {sum.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </p>
      </div>
      <button className="total-btn" onClick={() => setCurrentSale([])}>
        Remover todos
      </button>
    </div>
  );
}
