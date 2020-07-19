import React from 'react';
import { connect } from 'react-redux';

import classes from './login.css';
import { setUsername, setPassword, loginServer, signupServer} from '../../store/actions/login'
import { setError, setErrorType } from '../../store/actions/UIComponent';

const loginPage = (props) => {

    const btnClickHandler = (v) => {
        if(props.username && props.password) {
            if(v === 0) {
                props.loginServer(props.username,props.password)
            }
            else if(v === 1) {
                props.signupServer(props.username,props.password)
            }
        }
        else {
            props.setError()
            props.setErrorType('above fields are required')
        }
    }
 
    return(
        <div>
            <h1 className={classes.Title} >Budgetify</h1>
            <div className={classes.Container}>
                <input value={props.username} onChange={(e) => props.setUsername(e)} type="text" className={classes.Input} placeholder="Username"></input>
                <input value={props.password} onChange={(e) => props.setPassword(e)} type="password" className={classes.Input} placeholder="Password" ></input>
                <button className={classes.Btn} onClick={() => btnClickHandler(0)}>Login</button>
                <button className={classes.Btn} onClick={() => btnClickHandler(1)}>Sign Up</button>
            </div>
            {props.loading ? <div className={classes.Loader} ></div> : null}
            { props.error ? <h3 className={classes.Error}>{ props.errorMessage }</h3> : null}
        </div>
    );
}

const mapStateToProps = state => {
    return {
        username : state.login.username,
        password : state.login.password,
        error : state.ui.error,
        errorMessage : state.ui.errorMessage,
        loading : state.ui.loading
    }
}

const mapActionToProps = dispatch => {
    return {
        setUsername : (e) => dispatch(setUsername(e.target.value)),
        setPassword : (e) => dispatch(setPassword(e.target.value)),
        loginServer : (username,password) => dispatch(loginServer(username,password)),
        signupServer : (username,password) => dispatch(signupServer(username,password)),
        setError : () => dispatch(setError(true)),
        setErrorType : (msg) => dispatch(setErrorType(msg))
    }
}

export default connect(mapStateToProps,mapActionToProps)(loginPage);