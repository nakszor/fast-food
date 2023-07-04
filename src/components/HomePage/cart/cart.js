import "./cart.css";
import MiniCard from "./minicard/minicard";
import Total from "./total/total";
export default function Cart({ minicards }) {
  return (
    <aside className="cart">
      <div className="cart-div1">Carrinho de compras</div>
      <ul className="content-cart">
        {minicards.map((elem) => {
          return (
            <MiniCard
              name={elem.name}
              img={elem.img}
              category={elem.category}
            />
          );
        })}
      </ul>
      <Total />
    </aside>
  );
}
