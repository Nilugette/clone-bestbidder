import ContactActionTypes from './contact.types'

const initialState = {}

export default function contactReducer(state = initialState, action) {
    switch (action.type) {
        case ContactActionTypes.POST_CONTACT:
            return {...state,  contact: action.payload}
        default:
            return state
        
    }
}