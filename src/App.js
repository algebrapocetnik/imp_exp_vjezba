import logo from "./logo.svg";
import "./App.css";
import Brojevi from "./utilities/Numbers";
import { a } from "./utilities/Named4";
import { b } from "./utilities/Named4";
import { c } from "./utilities/Named4";
import * as everything from "./utilities/Named4";

function App() {
  return (
    <div className="App">
      <p>Broj1: {Brojevi.num1}</p>
      <p>Broj2: {Brojevi.num2}</p>
      <p>Broj3: {Brojevi.num3}</p>
      <p>Broj4: {Brojevi.num4}</p>
      <p>Broj named: {a}</p>
      <p>Broj named: {b}</p>
      <p>Broj named: {c}</p>
      <p>Sve: {everything.a}</p>
      <p>Sve: {everything.b}</p>
      <p>Sve: {everything.c}</p>
    </div>
  );
}

export default App;
