import { combineReducers } from "redux"

import ProductReducer from "./ProductReducer";

const reducers = combineReducers({
    ProductReducer: ProductReducer,
});

export default reducers;