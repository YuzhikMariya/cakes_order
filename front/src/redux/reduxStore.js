import {combineReducers, createStore} from "redux";
import {catalogReducer} from "./catalogReducer";
import {cartReducer} from './cartReducer';
import {accountReducer} from './accountReducer';
import {registrationReducer} from './registrationReducer';
import {newCakeReducer} from './newCakeReducer';

let reducers = combineReducers({
    catalogPage: catalogReducer,
    cartPage: cartReducer,
    accountPage: accountReducer,
    registrationPage: registrationReducer,
    newCake: newCakeReducer
})

let store = createStore(reducers);

export default store;