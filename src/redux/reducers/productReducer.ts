import { AnyAction } from "redux";
import productsAndCartActionTypes from '../actions/actionsTypes'

function productsReducer(state : [], action: AnyAction): [] {
    let newState; 

    switch(action.type) {
        case productsAndCartActionTypes.LOAD_PRODUCTS:
        newState = action.balloons
        break;
        default: 
        newState = state
        break;
    }
    return newState;
}

export default productsReducer;