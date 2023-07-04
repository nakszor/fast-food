import "./HomePageStyle.css";
import Header from "./Header/header";
import "../colors/colors.css";
import Card from "./Cards/cards";
import Cart from "./cart/cart";
import { useState, useEffect } from "react";
import axios from "axios";

function HomePage() {
  const [products, setProducts] = useState([]);
  const [minicards, setMinicards] = useState({});
  const [cards, setCards] = useState([]);

  useEffect(() => {
    axios
      .get("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch(() => {
        console.log("error");
      });
  }, []);

  return (
    <div className="homepage">
      <Header />
      <main>
        <div className="home-container">
          <ul className="cards-container">
            {products.map((elem) => {
              return (
                <Card
                  key={elem.id}
                  name={elem.name}
                  price={elem.price.toLocaleString("pt-br", {
                    style: "currency",
                    currency: "BRL",
                  })}
                  img={elem.img}
                  category={elem.category}
                />
              );
            })}
          </ul>
          <Cart />
        </div>
      </main>
    </div>
  );
}

export default HomePage;
