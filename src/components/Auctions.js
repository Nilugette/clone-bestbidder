import React from "react";
import { useSelector } from "react-redux"
import Card from "./Card"
import { isEmpty } from "./Utils";

const Auctions = () => {
  const auctions = useSelector(state => state.auctionReducer)

  return (
        <div className="grid-container">{!isEmpty(auctions) && auctions.map( (auction, index) => <Card key={index} auction={auction}/>)}</div>
  );
}

export default Auctions;
