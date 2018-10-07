import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './header';
import AccountForm from './accountForm';

class CreateAccount extends Component{
  render(){
    return(
      <div style={{backgroundColor: '#e4d9cb'}}>
      <div class = 'col-md-4 offset-md-4 jumbotron vertical-center'style={{backgroundColor: '#f5f5f5'}}>
          <Header/>
          <AccountForm/>
      </div>
      </div>
    )
  }
}

export default CreateAccount;