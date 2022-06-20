import { combineReducers } from "redux";
import { bigBasketReducer, BIGBASKET_FEATURE_KEY } from "./bigBasket/bigBasket.reducer";

let rootReducer = combineReducers({
[BIGBASKET_FEATURE_KEY] : bigBasketReducer
});

export {rootReducer}