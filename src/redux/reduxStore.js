import {combineReducers, createStore} from "redux";
import {catalogReducer} from "./catalogReducer";
import {cartReducer} from './cartReducer';
import {accountReducer} from './accountReducer';
import {registrationReducer} from './registrationReducer';

let reducers = combineReducers({
    catalogPage: catalogReducer,
    cartPage: cartReducer,
    accountPage: accountReducer,
    role: registrationReducer
})

let store = createStore(reducers);

export default store;