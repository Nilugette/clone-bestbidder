import React,  { useEffect }  from "react";
import { useDispatch, useSelector } from "react-redux";
import { postBidByAuctionId } from "../redux/auction/auction.action";
import { clickOnBid, disconnectSocket, initiateSocketConnection } from "../services/socketio.service";



const CardAuction = ({ auction, onShow }) => {
  const { user: currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
 
  useEffect(() => {
    initiateSocketConnection();
    clickOnBid((err, data) => {
      console.log(data)
    })
    return () => {
      disconnectSocket();
    }
  }, [auction.id]);

  const postBid = (data) => {
    data = {
      id_auction : auction.id
    }
    dispatch(postBidByAuctionId(data))
  }


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
          {
            !currentUser ? (
              <>
                <li className="list-group-item"><button className="btn btn-warning w-100" onClick={onShow}>Enchérir</button></li>
                <li className="list-group-item"><button className="btn btn-light w-100">Programmer</button></li>
                <li className="list-group-item"><button className="btn btn-light w-100">Acheter</button></li>
              </>
            ): (
              <>
                <li className="list-group-item"><button className="btn btn-warning w-100" onClick={postBid}>Enchérir</button></li>
                <li className="list-group-item"><button className="btn btn-light w-100">Programmer</button></li>
                <li className="list-group-item"><button className="btn btn-light w-100">Acheter</button></li>
              </>
            )
          }

        </ul>
      </div>
  );
}

export default CardAuction