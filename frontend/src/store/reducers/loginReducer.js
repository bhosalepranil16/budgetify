import { SET_USERNAME, SET_PASSWORD,SET_INITIAL_VALUE } from '../actions/login';

const initialState = {
    username : '',
    password : ''
}

const loginReducer = (state=initialState,action) => {
    switch(action.type) {
        case SET_USERNAME:
            return Object.assign({},state,{
                username : action.username
            })
        case SET_PASSWORD: 
            return Object.assign({},state,{
                password : action.password
            })
        case SET_INITIAL_VALUE:
            return {
                username : '',
                password : ''
            }
        default:
            return state;
    }
}

export default loginReducer;