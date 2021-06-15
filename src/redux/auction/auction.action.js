import axios from 'axios'
import API_URL from '../../api/constant'
import AuctionActionTypes from './auction.types'

export const getAuctions = () => {
    return (dispatch) => {
        return axios.get(API_URL + "auctions?_sort=id&_order=desc")
                    .then( (res) => {
                        dispatch({ type: AuctionActionTypes.GET_AUCTIONS, payload : res.data})
                    })
                    .catch(err => console.log(err))  
    }
}
