import React from 'react';
import { connect } from 'react-redux';

import classes from './listComponent.css';
import IncomeListItem from './IncomeListItem/incomeListItem';
import ExpenseListItem from './ExpenseListItem/expenseListItem';
import { calculatePercentage, formattedOutput } from '../../store/extraLogic/extraLogic';

const listComponent = (props) => {
    return(
        <div className={classes.Container + ' ' + classes.Clearfix}>
            <div className={classes.Income}>
                <h2 className={classes.IcomeTitle}>Income</h2>
                <div className={classes.IncomeList}>
                    { props.credit.map(c => {
                        return <IncomeListItem key={c._id} _id ={c._id} description={c.description} 
                        amount={formattedOutput(c.amount)} 
                        percentage={calculatePercentage(c.amount,props.totalCredit)} />
                    }) }
                </div>
            </div>
            <div className={classes.Expenses}>
                <h2 className={classes.ExpensesTitle}>Expenses</h2>
                <div className={classes.ExpensesList}>
                { props.debit.map(c => {
                        return <ExpenseListItem key={c._id} _id ={c._id} description={c.description} 
                        amount={formattedOutput(c.amount)} 
                        percentage={calculatePercentage(c.amount,props.totalDebit)} />
                    }) }
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        totalCredit : state.data.totalCredit,
        totalDebit : state.data.totalDebit,
        credit : state.data.credit,
        debit : state.data.debit
    }
}

export default connect(mapStateToProps)(listComponent);