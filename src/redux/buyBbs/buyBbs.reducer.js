import BuyBbsActionTypes from './buyBbs.types'

const initialState = {}

export default function buyBbsReducer(state = initialState, action) {
    switch (action.type) {
        case BuyBbsActionTypes.GET_REFILLS:
            return action.payload
        case BuyBbsActionTypes.POST_REFILLS:
            return {...state,  bb: action.payload}
        default:
            return state
        
    }
}