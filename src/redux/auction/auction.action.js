import axios from 'axios'
import AuctionActionTypes from './auction.types'

export const getAuctions = () => {
    return (dispatch) => {
        return axios.get('https://dnayywv457.execute-api.eu-west-3.amazonaws.com/development/auctions?_sort=id&_order=desc')
                    .then( (res) => {
                        dispatch({ type: AuctionActionTypes.GET_AUCTIONS, payload : res.data})
                    })
                    .catch(err => console.log(err))  
    }
}
