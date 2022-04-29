/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import axios from "axios";
import Characters from "./components/Characters";
import Character from "./components/Character";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [characters, setCharacters] = useState([]);

  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(async () => {
    const apiUrl = await axios("https://swapi.dev/api/people");
    setCharacters(apiUrl.data.results);
  }, []);

  console.log(characters);
  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {characters.map((value, index) => (
        <Character data={value} key={index}/>
      ))}
    </div>
  );
};

export default App;
