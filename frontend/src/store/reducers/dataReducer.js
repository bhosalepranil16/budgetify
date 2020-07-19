import { SAVE_ALL_DATA_TO_STATE } from '../actions/data';


const initialState = {
    totalCredit : 0,
    totalDebit : 0,
    credit : [],
    debit : []
}

const dataReducer = (state=initialState,action) => {
    switch(action.type) {
        case SAVE_ALL_DATA_TO_STATE:
            return {
                totalCredit : action.data.totalCredit,
                totalDebit : action.data.totalDebit,
                credit : action.data.credit,
                debit : action.data.debit
            }
        default:
            return state;
    }
}

export default dataReducer