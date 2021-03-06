import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import CreateAccount from './create-acc';
import LoginPage from './login-page';
import ResuemDragDrop from './resume-dragdrop';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import CreateAccount from './components/create-acc';
import LoginPage from './components/login-page';
import ReduxPromise from 'redux-promise';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
    <Provider store = {createStoreWithMiddleware(reducers)}>
        <BrowserRouter>
            <div>
                <Switch>
                    <Route exact path="/" component={App} />
                    <Route exact path="/createAccount" component={CreateAccount} />
                    <Route exact path="/loginPage" component={LoginPage} />
                      <Route exact path="/resumeDragDrop" component={ResuemDragDrop}/>
                </Switch>
            </div>
        </BrowserRouter>
    </Provider>, 
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
