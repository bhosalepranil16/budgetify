export const SET_LOADING = 'SET_LOADING';
export const SET_ERROR = 'SET_ERROR';
export const SET_SUCCESS = 'SET_SUCCESS';
export const SET_LOGIN = 'SET_LOGIN';
export const SET_ERROR_TITLE = 'SET_ERROR_TITLE';
export const SET_SIDE_DRAWER = 'SET_SIDE_DRAWER';

export const setLoading = (ans) => {
    return {
        type : SET_LOADING,
        ans
    }
}

export const setError = (ans) => {
    return {
        type : SET_ERROR,
        ans
    }
}

export const setSuccess = (ans) => {
    return {
        type : SET_SUCCESS,
        ans
    }
}

export const setLogin = (ans) => {
    return {
        type : SET_LOGIN,
        ans
    }
}

export const setErrorType = (msg) => {
    return {
        type : SET_ERROR_TITLE,
        msg : msg
    }
}

export const setSideDrawer = (ans) => {
    return {
        type : SET_SIDE_DRAWER,
        ans
    }
}


