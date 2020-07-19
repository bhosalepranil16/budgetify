import React from 'react';
import { connect } from 'react-redux';

import classes from './inputForm.css';
import { setDescription, setAmount, setOperation, setInitialValue} from '../../store/actions/inputForm';
import { saveData, saveAllDataToServer } from '../../store/actions/data';

const inputForm = (props) => {

    const createNewStateObject = () => {
        if(props.operation === 'inc') {
            return {
                totalCredit : props.totalCredit + parseFloat(props.amount),
                credit : props.credit.concat({ _id : Math.floor(Math.random() * 100000), description : props.description, amount : parseFloat(props.amount) }),
                debit : props.debit,
                totalDebit : props.totalDebit
            }
        }
        else if(props.operation === 'exp') {
            return {
                totalCredit : props.totalCredit,
                totalDebit : props.totalDebit + parseFloat(props.amount),
                credit : props.credit,
                debit : props.debit.concat({ _id : Math.floor(Math.random() * 100000), 
                    description : props.description, amount : parseFloat(props.amount) }),
            }
        }
    }

    const submitHandler = () => {
        if(props.description !== '' && props.amount !== '') {
            props.setInitialValue();
            const newObject = createNewStateObject();
            props.saveAllDataToServer(newObject);  
        }
    }

    return (
        <div  className={classes.Add}>
            <div value={props.operation} className={classes.AddContainer}>
        
                <input value={props.description} onChange={(e) => {props.setDescription(e)}} name="description" 
                type="text" className={classes.AddDescription} placeholder="Add description" autoComplete="off"></input>

                <select onChange={e => props.setOperation(e)} className={classes.AddType}>
                    <option value="inc" >+</option>
                    <option value="exp">-</option>
                </select>

                <input value={props.amount} onChange={(e) => props.setAmount(e)} name="amount" type="number" 
                className={classes.AddValue} placeholder="Value" ></input>

                <button onClick={() => submitHandler()} className={classes.AddBtn}>
                    <i className="fas fa-check "></i>
                </button>
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        description : state.form.description,
        amount : state.form.amount,
        operation : state.form.operation,
        totalCredit : state.data.totalCredit,
        totalDebit : state.data.totalDebit,
        credit : state.data.credit,
        debit : state.data.debit
    }
} 

const mapActionToProps = dispatch => {
    return {
        setDescription : (e) => dispatch(setDescription(e.target.value)),
        setAmount : (e) => dispatch(setAmount(e.target.value)),
        setOperation : (e) => dispatch(setOperation(e.target.value)),
        saveData : (d,a,o) => dispatch(saveData(d,a,o)),
        setInitialValue : () => dispatch(setInitialValue()),
        saveAllDataToServer : (o) => dispatch(saveAllDataToServer(o))
    }
}

export default connect(mapStateToProps,mapActionToProps)(inputForm);