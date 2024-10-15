import { combineReducers, createStore } from "redux";
import counterReducer from "./reducer";
import colorReducer from "./colorreducer";

const reducer = combineReducers({
    counter: counterReducer,
    color: colorReducer
})

const store = createStore(reducer)

export default store