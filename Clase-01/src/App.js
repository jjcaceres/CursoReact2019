import React from "react";
import { render } from "react-dom";
import Student from "./Components/Student";
import Geolocation from "./Components/GeolocationContainer";

const root = document.getElementById("root");

const Title = () => (
  <h1 id="hello-word" className="app-title">
    Hello WORLD
  </h1>
);

const App = () => (
  <div>
    <Title />
    <Student
      name="Paul Diaz"
      company="Cignium Technologies"
      background="Software Engineer"
    />
    <Student name="Luis Ruiz" company="Freelance" />
    <Student name="Andres Savedra" company="Cibertec" background="otro" />
  </div>
);

render(<App />, root);
