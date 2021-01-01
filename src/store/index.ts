import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { Searching } from "./modules/search/reducer";
import { FavReducer } from "./modules/favoriteCover/reducer";

const reducers = combineReducers({
    searching: Searching,
    fav: FavReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
