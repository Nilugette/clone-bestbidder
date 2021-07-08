import axios from 'axios'
import { API_URL } from '../../api/constant'
import CategoryActionTypes from './category.types'

export const getCategories = () => {
    return (dispatch) => {
        return axios.get(API_URL + "categories")
                    .then( (res) => {
                        dispatch({ type: CategoryActionTypes.GET_CATEGORIES, payload : res.data})
                    })
                    .catch(err => console.log(err))  
    }
}
