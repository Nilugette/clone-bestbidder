import AuctionActionTypes from './auction.types'

const initialState = {}

export default function auctionReducer(state = initialState, action) {
    switch (action.type) {
        case AuctionActionTypes.GET_AUCTIONS:
            return action.payload
        case AuctionActionTypes.GET_AUCTION_BY_ID:
            return state.map( auction => {
                if(auction.id === action.payload.id) {
                    return {
                        ...auction
                    }
                } else return auction
            })
        case AuctionActionTypes.POST_BID_BY_AUCTION_ID:
            return action.payload.id
        default:
            return state
        
    }
}