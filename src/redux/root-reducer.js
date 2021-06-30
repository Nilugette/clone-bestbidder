import { combineReducers } from "redux"
import auctionReducer from './auction/auction.reducer'
import auth from './authentication/auth.reducer'
import message from './authentication/message.reducer'
import accountReducer from './account/account.reducer'
import buyBbsReducer from './buyBbs/buyBbs.reducer'


export default combineReducers({
    auctionReducer,
    auth,
    message,
    accountReducer,
    buyBbsReducer
})