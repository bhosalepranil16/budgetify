import React from 'react';

import classes from './expenseBlock.css';
const expenseBlock = (props) => {
    return(
        <div className={classes.BudgetExpenses + ' ' + classes.Clearfix}>
            <div className={classes.BudgetExpensesText}>Expenses</div>
            <div className={classes.Right + ' ' + classes.Clearfix}>
                <div className={classes.BudgetExpensesValue}>{props.totalExpense}</div>
                <div className={classes.BudgetExpensesPercentage}>{props.totalPercentage}</div>
            </div>
        </div>
    );
}

export default expenseBlock;