import React, {useState} from "react";
import { useSelector } from "react-redux"
import CardAuction from "./CardAuction"
import ModalAuctions from "./ModalAuctions";
import { isEmpty } from "./Utils";

const Auctions = () => {
  const auctions = useSelector(state => state.auctionReducer)
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
        <ModalAuctions
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
        <div className="grid-container">{!isEmpty(auctions) && auctions.map( (auction, index) => <CardAuction key={index} auction={auction} onShow={() => setModalShow(true)}/>)}</div>
    </>
  );
}

export default Auctions;
