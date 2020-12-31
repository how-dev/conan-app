import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { Searching } from "./modules/search/reducer";

const reducers = combineReducers({
    searching: Searching,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
