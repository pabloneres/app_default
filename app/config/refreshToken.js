import axios from "axios"
import { authRefresh } from "~/redux/services"
import { API_URL } from "./general"
import { store } from "./../redux/store/configureStore";


const refreshToken = (config) => {
    const refreshToken = store.getState().auth.refreshToken;

    const options = {
        currentToken: refreshToken
    }

    axios.post(API_URL + "/auth/refresh", options).then((response) => {

    }).catch((error) => {

    })

}

export default refreshToken