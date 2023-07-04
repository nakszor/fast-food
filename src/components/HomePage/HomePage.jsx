import "./HomePageStyle.css";
import Header from "./Header/header";
import "../colors/colors.css";
import Card from "./Cards/cards";
import Cart from "./cart/cart";
import { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function HomePage() {
  const [products, setProducts] = useState([]);

  const [currentSale, setCurrentSale] = useState([]);

  const [vitrine, setVitrine] = useState([]);

  function callbackCards(name, img, price, category, id) {
    const card = {
      name: name,
      img: img,
      price: price,
      category: category,
      id: id,
      repeat: 0,
    };

    setCurrentSale([...currentSale, card]);
  }

  const sum = currentSale.reduce((acc, current) => {
    if (current.price !== undefined) {
      return (acc += Number(current.price));
    } else {
      return 0;
    }
  }, 0);

  function callBackDelete(position) {
    const filtrados = currentSale.filter((elem, index) => index !== position);
    setCurrentSale(filtrados);
  }

  useEffect(() => {
    axios
      .get("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch(() => {
        console.log("error");
      });
  });

  return (
    <div className="homepage">
      <Header setVitrine={setVitrine} products={products} />
      <main>
        <div className="home-container">
          <ul className="cards-container">
            {vitrine[0]
              ? vitrine.map((elem, index) => (
                  <Card
                    callbackCards={callbackCards}
                    id={elem.id}
                    key={elem.id}
                    name={elem.name}
                    price={elem.price}
                    img={elem.img}
                    category={elem.category}
                  />
                ))
              : products.map((elem, index) => (
                  <Card
                    callbackCards={callbackCards}
                    id={elem.id}
                    key={elem.id}
                    name={elem.name}
                    price={elem.price}
                    img={elem.img}
                    category={elem.category}
                  />
                ))}
          </ul>
          <Cart
            currentSale={currentSale}
            sum={sum}
            callBackDelete={callBackDelete}
            setCurrentSale={setCurrentSale}
          />
          <ToastContainer />
        </div>
      </main>
    </div>
  );
}

export default HomePage;
