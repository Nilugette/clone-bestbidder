import React, {useState} from "react";
import { useSelector } from "react-redux"
import Card from "./Card"
import ModalAuctions from "./ModalAuctions";
//import { Redirect } from 'react-router-dom';
import { isEmpty } from "./Utils";

const Auctions = () => {
  const auctions = useSelector(state => state.auctionReducer)
  const [modalShow, setModalShow] = useState(false);
  // const { user: currentUser } = useSelector((state) => state.auth);

  // if (!currentUser) {
  //   return <Redirect to="/login" />;
  // }


  return (
    <>
        <ModalAuctions
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
        <div className="grid-container">{!isEmpty(auctions) && auctions.map( (auction, index) => <Card key={index} auction={auction} onShow={() => setModalShow(true)}/>)}</div>
    </>
  );
}

export default Auctions;
