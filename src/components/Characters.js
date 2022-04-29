// Write your Character component here
import React from "react";
import Character from "./Character";


const Characters = (props) => {
  return (
    <div>
      {props.data.map((value, index) => (
        <Character data={value} key={index}/>
      ))}
    </div>
  );
};
export default Characters