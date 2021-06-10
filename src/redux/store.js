import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk"
import rootReducer from "./root-reducer"
import { getAuctions } from "./auction/auction.action"


const middleware = [thunk];

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);


store.dispatch(getAuctions())

export default store 