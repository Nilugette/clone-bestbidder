import axios from 'axios'
import authHeader from '../../services/auth-header'
import AccountActionTypes from './account.types'

export const getAccount = () => {
    return (dispatch) => {
        return axios.get('https://dnayywv457.execute-api.eu-west-3.amazonaws.com/development/account',  { headers: authHeader() })
                    .then( (res) => {
                        dispatch({ type: AccountActionTypes.GET_ACCOUNT, payload : res.data})
                    })
                    .catch(err => console.log(err))  
    }
}
