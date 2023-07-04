import "./header.css";
import "../../colors/colors.css";
import Button from "../../button/button";
export default function Header({ setVitrine, products }) {
  function callbackSearch(event) {
    const search = event.target.value;

    const filter = products.filter(
      (elem) => elem.name.includes(search) || elem.category.includes(search)
    );
    setVitrine(filter);
    console.log(filter);
  }

  return (
    <header>
      <div className="container-header">
        <div className="logo">
          <h1>Burguer</h1>
          <p>Kenzie</p>
        </div>
        <form
          className="input-search"
          onSubmit={(event) => event.preventDefault()}
        >
          <input
            type="text"
            placeholder="Digitar pesquisa"
            onChange={(event) => callbackSearch(event)}
          />
          <Button type="submit" text={"Pesquisar"} />
        </form>
      </div>
    </header>
  );
}
