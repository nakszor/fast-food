import "./cart.css";
import MiniCard from "./minicard/minicard";
import Total from "./total/total";
export default function Cart() {
  return (
    <aside className="cart">
      <div className="cart-div1">Carrinho de compras</div>
      <ul className="content-cart">
        <MiniCard />
        <MiniCard />
        <MiniCard />
      </ul>
      <Total />
    </aside>
  );
}
