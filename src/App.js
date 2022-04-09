import "./App.css";

function Header({ name }) {
  return (
    <header>
      <h1>{name}'s Kitchen</h1>
    </header>
  );
}

function Main({ adjective, dishes }) {
  return (
    <section>
      <p>We serve the most {adjective} food around</p>
      <ul style={{ textAlign: "left" }}>
        {dishes.map((dish) => (
          <li>{dish}</li>
        ))}
      </ul>
    </section>
  );
}

function Footer({ year }) {
  return (
    <footer>
      <p>Copyright {year}</p>
    </footer>
  );
}

const dishes = ["Macaroni and Cheese", "Salmon", "Tofu with Vegetables"];

function App() {
  return (
    <div className="App">
      <Header name="Mayo" />
      <Main adjective="amazing" dishes={dishes} />
      <Footer year={new Date().getFullYear()} />
    </div>
  );
}

export default App;
