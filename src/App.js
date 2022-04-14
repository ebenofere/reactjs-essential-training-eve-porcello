import "./App.css";
import restaurant from "./restaurant.jpg";

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
      <img
        src={restaurant}
        height={200}
        alt="napkin and silverware at a restaurant table"
      />
      {/* <img
        src="https://res.cloudinary.com/ebenofere/image/upload/v1630338291/passport_a4f5uc.jpg"
        height={200}
        alt="napkin and silverware at a restaurant table"
      /> */}
      <ul style={{ textAlign: "left" }}>
        {dishes.map((dish) => (
          <li key={dish.id}>{dish.title}</li>
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

const dishes = [
  "Macaroni and Cheese",
  "Salmon",
  "Tofu with Vegetables",
  "Beans and Yam",
  "Amala, Gbegiri, Ewedu, and Eran Ogufe",
];

const dishObjects = dishes.map((dish, i) => ({ id: i, title: dish }));

console.log(dishObjects, "dishObjects");

function App() {
  return (
    <div className="App">
      <Header name="Mayo" />
      <Main adjective="amazing" dishes={dishObjects} />
      <Footer year={new Date().getFullYear()} />
    </div>
  );
}

export default App;
