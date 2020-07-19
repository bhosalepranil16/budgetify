import React from 'react';
import { connect } from 'react-redux';

import classes from './topContainer.css';
import IncomeBlock from '../../components/incomeBlock/incomeBlock';
import ExpenseBlock from '../../components/expenseBlock/expenseBlock';
import { calculatePercentage, formattedOutput } from '../../store/extraLogic/extraLogic';
import { logout } from '../../store/actions/login';
import SideDrawer from '../../components/UI/sideDrawer/sideDrawer';
import { setSideDrawer } from '../../store/actions/UIComponent';

const topContainer = (props) => {
    const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
    const d = new Date();

    return(
        <div className={classes.Container}>
            <button type='button' className={classes.HamBurger} onClick={() => props.setSideDrawer()}>
                <i className="fas fa-bars fa-2x"></i>
            </button>
            <div className={classes.Top}>
                { props.sideDrawer ? <SideDrawer ans/> : null }
                <div className={classes.Budget}>
                    <div className={classes.BudgetTitle}>
                        Available Budget in <span className={classes.BudgetTitleMonth}>{months[d.getMonth()] + ' ' + d.getFullYear()}</span>:
                    </div>
                    <div className={classes.BudgetValue}>{formattedOutput(props.totalCredit - props.totalDebit)}</div>
                    <IncomeBlock totalIncome= {formattedOutput(props.totalCredit)}/>
                    <ExpenseBlock totalPercentage = {calculatePercentage(props.totalDebit,props.totalCredit)} totalExpense={formattedOutput(props.totalDebit)}/>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        totalCredit : state.data.totalCredit,
        totalDebit : state.data.totalDebit,
        sideDrawer : state.ui.sideDrawer
    }
}

const mapActionToProps = dispatch => {
    return {
        logout : () => dispatch(logout()),
        setSideDrawer : () => dispatch(setSideDrawer(true))
    }
}

export default connect(mapStateToProps,mapActionToProps)(topContainer);