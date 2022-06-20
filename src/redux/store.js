import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { rootReducer } from "./rootReducer";
let middleWares = [thunk]

let store = createStore(rootReducer,composeWithDevTools(applyMiddleware(...middleWares)));

export {store};