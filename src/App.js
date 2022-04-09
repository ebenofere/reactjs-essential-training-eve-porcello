import "./App.css";

function Header({ name }) {
  return (
    <header>
      <h1>{name}'s Kitchen</h1>
    </header>
  );
}

function Main({ adjective }) {
  return (
    <section>
      <p>We serve the most {adjective} food around</p>
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

function App() {
  return (
    <div className="App">
      <Header name="Mayo" />
      <Main adjective="amazing" />
      <Footer year={new Date().getFullYear()} />
    </div>
  );
}

export default App;
