import React from "react";

const Character = (props) => {
  const name = props.data.name
  return (
    <div>
      <span>{name}</span>
    </div>
  );
};
export default Character;
