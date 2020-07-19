import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers,applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import inputFormReducer from './store/reducers/inputFormReducer';
import dataReducer from './store/reducers/dataReducer';
import loginReducer from './store/reducers/loginReducer';
import UIComponentReducer from './store/reducers/UIComponent';

const rootReducer = combineReducers({
    form : inputFormReducer,
    data : dataReducer,
    login : loginReducer,
    ui : UIComponentReducer
})

const compseEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer,compseEnhancer(applyMiddleware(thunk)));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();

// https://budgetify-affbc.web.app/