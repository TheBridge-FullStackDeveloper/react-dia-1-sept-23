import "./App.css";
import Header from "./components/Header/Header";
import Welcome from "./components/Welcome/Welcome";
import WelcomeClass from "./components/WelcomeClass/WelcomeClass";

const name = "Pepe";
const whoIAm = <h1 className="textColor">Hola, me llamo {name}</h1>;
const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) => <li>{number}</li>);

const users = [
  {
    name: "Frances",
    email: "frances@gmail.com",
  },
  {
    name: "Álvaro",
    email: "álvaro@gmail.com",
  },
  {
    name: "Francesc",
    email: "francesc@gmail.com",
  },
];

function App() {
  return (
    <div>
      <Header />
      <Welcome name={name} />
      <Welcome name="Demis" />

      {whoIAm}
      <WelcomeClass name={name} />
      <ul>{listItems}</ul>
      {users.map((user) => {
        return <div>
          <p>{user.name}</p>
          <p>{user.email}</p>
        </div>;
      })}
    </div>
  );
}

export default App;
