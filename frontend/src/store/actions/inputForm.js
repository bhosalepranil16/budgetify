export const SET_DESCRIPTION = 'SET_DESCRIPTION';
export const SET_AMOUNT = 'SET_AMOUNT';
export const SET_OPERATION = 'SET_OPERATION';
export const SET_INITIAL_VALUE = 'SET_INITIAL_VALUE';

export const setDescription = (description) => {
    return {
        type : SET_DESCRIPTION,
        description
    }
}

export const setAmount = (amount) => {
    return {
        type : SET_AMOUNT,
        amount
    }
}

export const setOperation = (operation) => {
    return {
        type : SET_OPERATION,
        operation
    }
}

export const setInitialValue = () => {
    return {
        type : SET_INITIAL_VALUE
    }
}