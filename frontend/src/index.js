import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter, Route, Switch, Router} from 'react-router-dom';
import CreateAccount from './create-acc';
import LoginPage from './login-page';
import ResuemDragDrop from './resume-dragdrop';


ReactDOM.render(
    <BrowserRouter>
        <div>
            <Switch>
                <Route exact path="/" component={App} />
                <Route exact path="/createAccount" component={CreateAccount} />
                <Route exact path="/loginPage" component={LoginPage} />
                <Route exact path="/resumeDragDrop" component={ResuemDragDrop}/>
            </Switch>
        </div>
    </BrowserRouter>, 
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
