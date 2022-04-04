import { AnyAction } from 'redux'
import productsAndCartActionTypes from '../actions/actionsTypes'

function userReducer(state: [], action: AnyAction) : [] {
    let newState;

    switch (action.type) {
        case productsAndCartActionTypes.LOAD_USER:
            newState = action.payload
            break;
        case productsAndCartActionTypes.ADD_USER:
            newState = action.payload.newUser
            break;
        default:
            newState = state;
            break;
    }
    return newState;
}

export default userReducer;