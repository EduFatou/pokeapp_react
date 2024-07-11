import React from "react";
import { Link } from 'react-router-dom'




const Card = ({ dataName, dataType, dataNumber, dataImg }) => {
  return <article className="card" >
    <Link to={`/pokemon/${dataNumber}`} >
      <div>
        <div className="info">
        <p>Name: {dataName}</p>
        <p>ID: {dataNumber}</p>
        <p>Type: {dataType}</p>
        </div>
        <img src={dataImg} alt={dataName} className="img-card"/>
      </div>
    </Link>

  </article>
};

export default Card;
