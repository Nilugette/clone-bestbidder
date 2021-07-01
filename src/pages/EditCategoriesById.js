import React, {useState} from "react";
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom";
import CardAuction from "../components/CardAuction";
import ModalAuctions from "../components/ModalAuctions";
import { isEmpty } from "../components/Utils";


const EditCategoriesById = () => {
    const auctions = useSelector(state => state.auctionReducer)
    const [modalShow, setModalShow] = useState(false);
    const { id } = useParams();
    const auctionBycategory = auctions.find(auction => auction.category === id.toString())
    
    return (
        <>
            <ModalAuctions
              show={modalShow}
              onHide={() => setModalShow(false)}
            />
            
            { auctionBycategory ? (
                    <div className="grid-container"> 
                    {
                        !isEmpty(auctions) && auctions.map( (auction, index) => {
                            if(auction.category === id.toString()) {
                                return <CardAuction key={index} auction={auction} onShow={() => setModalShow(true)}/>  
                            }
                         })
                    } 
                    </div>
                ) : (
                    <div className="jumbotron text-center">
                        <h1 className="display-4">Il n'y a aucune enchère pour cette categorie.</h1>
                    </div>
                ) 
            }
           
        </>
    );
}

export default EditCategoriesById;