import CategoryActionTypes from './category.types'

const initialState = {}

export default function categoryReducer(state = initialState, action) {
    switch (action.type) {
        case CategoryActionTypes.GET_CATEGORIES:
            return action.payload
        default:
            return state
        
    }
}