import axios from 'axios';

import { setLogin, setErrorType, setError, setLoading, setSideDrawer } from '../actions/UIComponent';
import { getAllDataFromServer } from '../actions/data';

export const SET_INITIAL_VALUE = 'SET_INITIAL_VALUE';
export const SET_USERNAME = 'SET_USERNAME';
export const SET_PASSWORD = 'SET_PASSWORD';
export const LOGIN_SERVER = 'LOGIN_SERVER';
export const SIGNUP_SERVER = 'SIGNUP_SERVER';

export const setInitialValue = () => {
    return {
        type : SET_INITIAL_VALUE
    }
}

export const setUsername = (username) => {
    return {
        type : SET_USERNAME,
        username : username
    }
}

export const setPassword = (password) => {
    return {
        type : SET_PASSWORD,
        password : password
    }
}

export const loginServer = (username,password) => {
    const loginData = {
        username : username,
        password : password
    }
    return dispatch => {
        dispatch(setLoading(true))
        dispatch(setError(false))
        axios({
            method : 'POST',
            url : '/login',
            data : loginData,
        })
        .then((res) => {
            sessionStorage.setItem('username',res.data.username)
            sessionStorage.setItem('token',res.data.token)
            dispatch(setInitialValue())
            dispatch(getAllDataFromServer())
            dispatch(setLoading(false))
            dispatch(setLogin(true))
        })
        .catch((err) => {
            dispatch(setLoading(false))
            dispatch(setError(true))
            dispatch(setErrorType('Error'))
        })
    }
}

export const signupServer = (username,password) => {
    const loginData = {
        username : username,
        password : password
    }
    console.log(loginData);
    
    return dispatch => {
        dispatch(setError(false))
        dispatch(setLoading(true))
        axios({
            method : 'POST',
            url : '/addUser',
            data : loginData
        })
        .then((res) => {
            sessionStorage.setItem('username',res.data.username)
            sessionStorage.setItem('token',res.data.token)
            dispatch(setInitialValue())
            dispatch(getAllDataFromServer())
            dispatch(setLoading(false))
            dispatch(setLogin(true))
        })
        .catch((err) => {
            dispatch(setLoading(false))
            dispatch(setError(true))
            dispatch(setErrorType('Error'))
        })
        
    }
}

export const logout = () => {
    return dispatch => {
        sessionStorage.removeItem('username');
        sessionStorage.removeItem('token');
        dispatch(setSideDrawer(false));
        dispatch(setLogin(false));
    }
}

export const deleteAccount = () => {
    return dispatch => {
        axios({
            method : 'DELETE',
            url : `/deleteUser/${sessionStorage.getItem('username')}`,
            headers : {
                Authorization : sessionStorage.getItem('token')
            }
        })
        .then(res => {
            dispatch(logout())
        })
        .catch(err => {
            
        })
    }
}