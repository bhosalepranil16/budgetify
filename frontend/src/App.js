import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import TopContainer from './containers/topContainer/topContainer';
import BottomContainer from './containers/bottomContainer/bottomContainer';
import LoginPage from './containers/login/login';

axios.defaults.baseURL = 'https://pranil-backend-api.herokuapp.com';

const app = (props) => {

    const renderItem = props.login ? <div><TopContainer/><BottomContainer/></div> : <LoginPage /> 
    return (
      <div className="App">
            {renderItem}
      </div>
    );
  
}

const mapStateToProps = state => {
  return {
    login : state.ui.login
  }
}

export default connect(mapStateToProps)(app);
