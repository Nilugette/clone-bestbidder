import axios from 'axios'
import { API_URL } from '../../api/constant'
import authHeader from '../../services/auth-header'
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

export const getAuctionById = (data) => {
    return (dispatch) => {
        return axios.get({
                        method: "get",
                        url: API_URL + `auctions?id_auction=${data.id}`,
                        data: {...data}
                    })
                    .then( () => {
                        dispatch({ type: AuctionActionTypes.GET_AUCTION_BY_ID, payload : {...data}})
                    })
                    .catch(err => console.log(err))  
    }
}

export const postBidByAuctionId = (data) => {
    return (dispatch) => {
        return axios({
            method: "post",
            url: API_URL + "auctions/bid",
            header: authHeader(),
            data: {
                id_auction: data.id
            }
        })
        .then( () => {
            dispatch({ type: AuctionActionTypes.POST_BID_BY_AUCTION_ID, payload : data.id})
        })
        .catch(err => console.log(err))  
    }
}
