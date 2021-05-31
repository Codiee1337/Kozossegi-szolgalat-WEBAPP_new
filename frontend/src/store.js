import {applyMiddleware, combineReducers, createStore,compose} from "redux"
import thunk from 'redux-thunk'

import { UserReducer } from "./Reducers/UserReducer"


const initialState = {
    userData: localStorage.getItem('userData')?JSON.parse(localStorage.getItem('userData')):null
}

const reducer = combineReducers({
    
    userData: UserReducer
        
        
    
})
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducer,initialState,composeEnhancer(applyMiddleware(thunk)))

export default store;