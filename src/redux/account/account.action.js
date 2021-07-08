import axios from 'axios'
import { API_URL } from '../../api/constant'
import authHeader from '../../services/auth-header'
import AccountActionTypes from './account.types'

export const getAccount = () => {
    return (dispatch) => {
        return axios.get(API_URL + "account",  { headers: authHeader() })
                    .then( (res) => {
                        dispatch({ type: AccountActionTypes.GET_ACCOUNT, payload : res.data})
                    })
                    .catch(err => console.log(err))  
    }
}

export const patchAccount = (data) => {
    return (dispatch) => {
        return axios({
            method: "patch",
            url: API_URL + "account",
            headers: authHeader(),
            data: {...data}
        })
        .then( () => {
            dispatch({ type: AccountActionTypes.PATCH_ACCOUNT, payload : {...data}})
        })
        .catch(err => console.log(err))  
    }
}

export const deleteAccount = (id) => {
    return (dispatch) => {
        return axios({
            method: "delete",
            url: API_URL + "account",
            headers: authHeader()
        })
        .then( () => {
            dispatch({ type: AccountActionTypes.DELETE_ACCOUNT, payload : id})
        })
        .catch(err => console.log(err))  
    }
}
