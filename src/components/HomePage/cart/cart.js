import "./cart.css";
import MiniCard from "./minicard/minicard";
import EmptyCart from "./EmptyCart/emptycart";
import Total from "./total/total";
import { toast } from "react-toastify";

export default function Cart({
  sum,
  currentSale,
  setCurrentSale,
  callBackDelete,
}) {
  const arr = [];

  function createMinicard(elem, index) {
    if (elem.name !== undefined) {
      if (arr.indexOf(elem.name) === -1) {
        arr.push(elem.name);

        return (
          <MiniCard
            key={index}
            img={elem.img}
            name={elem.name}
            category={elem.name}
            position={index}
            callBackDelete={callBackDelete}
          />
        );
      }
    }
  }

  return (
    <aside className="cart">
      <div className="cart-div1">Carrinho de compras</div>
      <ul className="content-cart">
        {currentSale[0] ? (
          currentSale.map((elem, index) => createMinicard(elem, index))
        ) : (
          <EmptyCart />
        )}
      </ul>
      <Total sum={sum} setCurrentSale={setCurrentSale} />
    </aside>
  );
}
