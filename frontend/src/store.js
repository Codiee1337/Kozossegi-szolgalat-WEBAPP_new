import {applyMiddleware, combineReducers, createStore,compose} from "redux"
import thunk from 'redux-thunk'
import { register } from "./Actions/Register"
import { LogInReducer } from "./Reducers/LogInReducer"
import { RegisterReducer } from "./Reducers/RegisterReducer"

const initialState = {
    loginInfo: localStorage.getItem('loginInfo')?JSON.parse(localStorage.getItem('loginInfo')):null
}

const reducer = combineReducers({
    loginInfo:LogInReducer,
    loginInfo:RegisterReducer
})
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducer,initialState,composeEnhancer(applyMiddleware(thunk)))

export default store;