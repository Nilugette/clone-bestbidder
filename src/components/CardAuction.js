import React from "react";

const CardAuction = ({ auction, onShow }) => {

  return (
      <div className="card" style={{width: "18rem"}}>
        <img className="card-img-top auction-img" src={auction.images} alt="Card cap" ></img>
        <div className="card-body">
          <div className="price">
            <p> 1<span>€00</span></p>
          </div>
          <h5 className="card-title">{auction.title}</h5>
          <p className="card-text">{auction.description}</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item"><button className="btn btn-warning w-100" onClick={onShow}>Enchérir</button></li>
          <li className="list-group-item"><button className="btn btn-light w-100">Programmer</button></li>
          <li className="list-group-item"><button className="btn btn-light w-100">Acheter</button></li>
        </ul>
      </div>
  );
}

export default CardAuction