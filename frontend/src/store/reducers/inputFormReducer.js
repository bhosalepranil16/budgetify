import { SET_DESCRIPTION, SET_OPERATION, SET_AMOUNT, SET_INITIAL_VALUE } from '../actions/inputForm';

const initialState = {
    description : '',
    amount : '',
    operation : 'inc'
}

const inputFormReducer = (state = initialState,action) => {
    switch(action.type) {
        case SET_INITIAL_VALUE:
            return Object.assign({},state,{
                description : '',
                amount : ''
            })
        case SET_DESCRIPTION:
            return Object.assign({}, state, {
                description: action.description
              })
        case SET_AMOUNT: 
        return Object.assign({}, state, {
            amount: action.amount
        })
        case SET_OPERATION:
            return Object.assign({}, state, {
                operation: action.operation
              })
        default:
            return state;
    }
}

export default inputFormReducer;