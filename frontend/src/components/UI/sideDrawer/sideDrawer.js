import React from 'react';
import { connect } from 'react-redux';

import classes from './sideDrawer.css';
import { setSideDrawer } from '../../../store/actions/UIComponent';
import { logout, deleteAccount } from '../../../store/actions/login';

const sideDrawer = (props) => {
    return (
        <div className={classes.SideDrawer}>
            <button className={classes.Exit} onClick={() => props.setSideDrawer()}><i className="far fa-times-circle fa-2x"></i></button>
            <div className={classes.User}><i className="fas fa-user fa-10x"></i></div>
            <h1 className={classes.Username}>{sessionStorage.getItem('username')}</h1>
            <button className={classes.Btn} onClick={() => props.logout()}><i className="fas fa-sign-out-alt fa-4x"></i></button>
            <button className={classes.Btn} onClick={() => props.deleteAccount()}><i className="fas fa-trash-alt fa-4x"></i></button>
        </div>
    );
};

const mapActionToProps = dispatch => {
    return {
        setSideDrawer : () => dispatch(setSideDrawer(false)),
        logout : () => dispatch(logout()),
        deleteAccount : () => dispatch(deleteAccount())
    }
}

export default connect(null,mapActionToProps)(sideDrawer);
