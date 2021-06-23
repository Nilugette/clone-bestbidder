import React from "react";
import { useSelector } from "react-redux"


const Card = ({ auction, onShow }) => {

  const { user: currentUser } = useSelector((state) => state.auth);

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
          <li className="list-group-item"><button onClick={onShow}>Enchérir</button></li>
          <li className="list-group-item"><button>Programmer</button></li>
          <li className="list-group-item"><button>Acheter</button></li>
        </ul>
      </div>
  );
}

export default Card