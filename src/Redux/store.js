import { combineReducers, createStore, applyMiddleware } from "redux";

import itemReducer from "Redux/Reducer/item-reducer";
import paymentReducer from "Redux/Reducer/payment-reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  items: itemReducer,
  payments: paymentReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
