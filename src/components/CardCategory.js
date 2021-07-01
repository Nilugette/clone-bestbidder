import React from "react";
import {Link} from 'react-router-dom'

const CardCategory = ({ id, image, title }) => {

  return (
      <div className="card" style={{width: "18rem"}}>
            <Link to={{ pathname: `/categories/${id}` }} className="text-dark text-decoration-none" >
                <img className="card-img-top auction-img" src={image} alt="Card cap" ></img>
                <h5 className="card-title">{title}</h5>
            </Link>
      </div>
  );
}

export default CardCategory