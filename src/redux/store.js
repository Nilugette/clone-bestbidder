import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk"
import rootReducer from "./root-reducer"
import { getAuctions } from "./auction/auction.action"


const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
)

store.dispatch(getAuctions())

export default store 