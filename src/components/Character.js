import React from "react";

const Character = (props) => {
  console.log(props);
  return (
    <div>
      <span key={props.index}>{props.data.name}</span>
    </div>
  );
};
export default Character;
