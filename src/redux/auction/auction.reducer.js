import AuctionActionTypes from './auction.types'

const initialState = {}

export default function auctionReducer(state = initialState, action) {
    switch (action.type) {
        case AuctionActionTypes.GET_AUCTIONS:
            return action.payload
        default:
            return state
        
    }
}