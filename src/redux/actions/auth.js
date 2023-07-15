import { LOGIN, SIGNUP } from "../../config/urls";
import { apiPost, clearUserData, setUserData } from "../../utils/untils";
import store from "../store";
import types from "../types";

const {dispatch} = store;

export const saveUserData = (data) => {
    dispatch({
        type: types.LOGIN,
        payload: data,
    })
}

export function login(data){
    return new Promise((resolve, reject)=>{

        apiPost(LOGIN,data)
                .then((res) => {
                    setUserData(res).then(() => {
                        resolve(res);
                        saveUserData(res);
                    })
                })
    })
}

export function signup(data){
    return apiPost(SIGNUP);
}

export function logout(){
    dispatch({
        type: types.CLEAR_REDUX_STATE,
    });
    clearUserData()
}