import "./HomePageStyle.css";
import Header from "./Header/header";
import "../colors/colors.css";
import Card from "./Cards/cards";
import Cart from "./cart/cart";
function HomePage() {
  return (
    <div className="homepage">
      <Header />
      <main>
        <div className="home-container">
          <ul className="cards-container">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </ul>
          <Cart />
        </div>
      </main>
    </div>
  );
}
export default HomePage;
