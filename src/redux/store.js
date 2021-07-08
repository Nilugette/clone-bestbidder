import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk"
import rootReducer from "./root-reducer"
import { getAuctions } from "./auction/auction.action"
import { getAccount } from './account/account.action';
import { getBbs } from './buyBbs/buyBbs.action';
import { getCategories } from './category/category.action';

const middleware = [thunk];

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);


store.dispatch(getAuctions())
store.dispatch(getAccount())
store.dispatch(getBbs())
store.dispatch(getCategories())

export default store 