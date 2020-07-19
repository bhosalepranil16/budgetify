import axios from 'axios';

export const SAVE_DATA = 'SAVE_DATA';
export const REMOVE_LIST_ITEM = 'REMOVE_LIST_ITEM';
export const GET_DATA = 'GET_DATA';
export const INITIALIZE_DATA = 'INITIALIZE_DATA';

export const GET_ALL_DATA_FROM_SERVER = 'GET_ALL_DATA_FROM_SERVER';
export const SAVE_ALL_DATA_TO_STATE = 'SAVE_ALL_DATA_TO_STATE';
export const SAVE_ALL_DATA_TO_SERVER = 'SAVE_ALL_DATA_TO_SERVER';
 
export const saveData = (description,amount,operation) => {
    return {
        type : SAVE_DATA,
        description,
        amount,
        operation
    }
}

export const removeListItem = (operation,_id) => {
    return {
        type : REMOVE_LIST_ITEM,
        operation,
        _id
    }
}

export const initializeData = (data) => {
    return {
        type : INITIALIZE_DATA,
        description : data.description,
        amount : parseFloat(data.amount),
        operation : data.operation
    }
}

export const saveAllDataToState = (data) => {
    return {
        type : SAVE_ALL_DATA_TO_STATE,
        data : data
    }
}
// 
export const getAllDataFromServer = () => {
    return dispatch => {
        axios({
            method : 'GET',
            url : `/getData/${sessionStorage.getItem('username')}`,
            headers : {
                Authorization : sessionStorage.getItem('token')
            }
        })
        .then(res => {
            dispatch(saveAllDataToState(res.data))
        })
        .catch(err=> {
            console.log(err);
        })
    }
}

export const saveAllDataToServer = data => {
    const newState = {
        user : data
    }
    return dispatch => {
        axios({
            method : 'PATCH',
            url : `/updateData/${sessionStorage.getItem('username')}`,
            data : newState,
            headers : {
                Authorization : sessionStorage.getItem('token')
            }
        })
        .then(res => {
            dispatch(saveAllDataToState(res.data))
        })
        .catch(err => {
            console.log(err)
        })
    }
}

