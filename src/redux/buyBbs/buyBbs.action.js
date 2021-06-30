import axios from 'axios'
import API_URL from '../../api/constant'
import authHeader from '../../services/auth-header'
import BuyBbsActionTypes from './buyBbs.types'

export const getBbs = () => {
    return (dispatch) => {
        return axios.get(API_URL + "refills",  { headers: authHeader() })
                    .then( (res) => {
                        dispatch({ type: BuyBbsActionTypes.GET_REFILLS, payload : res.data})
                    })
                    .catch(err => console.log(err))  
    }
}

export const postBbs = (data) => {
    return (dispatch) => {
        return axios({
            method: "post",
            url: API_URL + "refills",
            headers: authHeader(),
            data: {...data}
        })
        .then( () => {
            dispatch({ type: BuyBbsActionTypes.POST_REFILLS, payload : {...data}})
        })
        .catch(err => console.log(err))  
    }
}
