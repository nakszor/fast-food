import "./header.css";
import "../../colors/colors.css";
import Button from "../../button/button";
export default function Header() {
  return (
    <header>
      <div className="container-header">
        <div className="logo">
          <h1>Burguer</h1>
          <p>Kenzie</p>
        </div>
        <form className="input-search">
          <input type="text" placeholder="Digitar pesquisa" />
          <Button text={"Pesquisar"} />
        </form>
      </div>
    </header>
  );
}
