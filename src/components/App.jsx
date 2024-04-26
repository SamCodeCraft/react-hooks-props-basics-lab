import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import Links from "../components/Links";
// pass this data down as props to the child component(s) that need it!
import user from "../data/user";
console.log(user);

function App(name, city,) {
  const user = {
    name: "Liza",
    city: "New York",
    bio: "I made this!",
    color: "firebrick",
  
  };

  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Links />
    </div>
  );
}

export default App;
