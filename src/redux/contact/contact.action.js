import axios from 'axios'
import { API_URL } from '../../api/constant'
import ContactActionTypes from './contact.types'

export const postContact = (data) => {
    return (dispatch) => {
        return axios({
            method: "post",
            url: API_URL + "contact",
            data: {...data}
        })
        .then( () => {
            dispatch({ type: ContactActionTypes.POST_CONTACT, payload : {...data}})
        })
        .catch(err => console.log(err))  
    }
}