import React from "react";

const Card = ({ dataName, dataType, dataNumber, dataImg }) => {
  return <article>
    <p>Name: {dataName}</p>
    <p>ID: {dataNumber}</p>
    <p>Type: {dataType}</p>
    <img src={dataImg} alt={dataName} />

  </article>
};

export default Card;
