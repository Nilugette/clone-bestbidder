import AccountActionTypes from './account.types'

const initialState = {}

export default function accountReducer(state = initialState, action) {
    switch (action.type) {
        case AccountActionTypes.GET_ACCOUNT:
            return action.payload
        default:
            return state
        
    }
}