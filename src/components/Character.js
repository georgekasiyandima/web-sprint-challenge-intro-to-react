// Write your Character component here
import React from "react";

export const Character = (props) => {
  return (
    <div>
      {props.data.map((value, index) => (
        <p key={index}>{value.name}</p>
      ))}
    </div>
  );
};