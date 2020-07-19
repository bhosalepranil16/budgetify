import { SET_LOADING, SET_ERROR, SET_LOGIN, SET_SUCCESS, SET_ERROR_TITLE, SET_SIDE_DRAWER } from '../actions/UIComponent';

const initialState = {
    login : false,
    loading : false,
    error : false,
    errorMessage : '',
    success : true,
    sideDrawer : false
}

const UIComponentReducer = (state=initialState,action) => {
    switch(action.type) {
        case SET_LOADING:
            return Object.assign({},state,{
                loading : action.ans
            })
        case SET_ERROR:
            return Object.assign({},state,{
                error : action.ans
            })
        case SET_LOGIN:
            return Object.assign({},state,{
                login : action.ans
            })
        case SET_SUCCESS : 
            return Object.assign({},state,{
                success : action.ans
            })
        case SET_ERROR_TITLE:
            return Object.assign({},state,{
                errorMessage : action.msg
            })
        case SET_SIDE_DRAWER:
            return Object.assign({},state,{
                sideDrawer : action.ans
            })
        default :
            return state;
    }
}

export default UIComponentReducer;