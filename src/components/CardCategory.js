import React from "react";

const CardCategory = ({ image, title }) => {

  return (
      <div className="card" style={{width: "18rem"}}>
        <img className="card-img-top auction-img" src={image} alt="Card cap" ></img>
        <h5 className="card-title">{title}</h5>
      </div>
  );
}

export default CardCategory