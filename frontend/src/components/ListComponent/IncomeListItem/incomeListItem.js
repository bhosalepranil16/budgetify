import React from 'react';
import { connect } from 'react-redux';

import classes from './incomeListItem.css';
import { removeListItem, saveAllDataToServer } from '.././../../store/actions/data';

const incomeListComponent = (props) => {

    const createNewStateObject = () => {
        const newArray = props.credit.filter((c) => c._id !== props._id)
        let total = 0;
        newArray.forEach(element => {
            total = total + element.amount
        });
        return {
            totalCredit : total,
            credit : newArray,
            debit : props.debit,
            totalDebit : props.totalDebit
        }
    }

    const deleteBtnClickedHandler = () => {
        // props.removeListItem('inc',props._id)
        props.saveAllDataToServer(createNewStateObject())
    }

    return (
        <div className={classes.Item + ' ' + classes.Clearfix} id="income-0">
            <div className={classes.ItemDescription}>{props.description}</div>
            <div className={classes.Right + ' ' + classes.Clearfix}>
                <div className={classes.ItemValue}>{props.amount}</div>
                <div className={classes.ItemPercentage}>{props.percentage}</div>
                <div className={classes.ItemDelete}>
                    <button onClick={() => deleteBtnClickedHandler()}  className={classes.ItemDeleteBtn}>
                        <i className="fas fa-times"></i>
                    </button>
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

const mapActionToProps = dispatch => {
    return {
        removeListItem : (o,i) => dispatch(removeListItem(o,i)),
        saveAllDataToServer : (o) => dispatch(saveAllDataToServer(o))
    }
}

export default connect(mapStateToProps,mapActionToProps)(incomeListComponent);