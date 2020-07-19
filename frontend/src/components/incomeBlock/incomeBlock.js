import React from 'react';

import classes from './incomeBlock.css';

const incomeBlock = (props) => {
    return(
        <div className={classes.BudgetIncome + ' ' + classes.Clearfix}>
            <div className={classes.BudgetIncomeText}>Income</div>
            <div className={classes.Right}>
                <div className={classes.BudgetIncomeValue}>{ props.totalIncome }</div>
                <div className={classes.BudgetIncomePercentage}>&nbsp;</div>
            </div>
        </div>
    );
}

export default incomeBlock;