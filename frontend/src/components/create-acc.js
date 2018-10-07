import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './header';
import AccountForm from './accountForm';

class CreateAccount extends Component{
  render(){
    return(
      <div style={{backgroundColor: '#f5f5f5'}}>
          <Header/>
          <AccountForm/>
      </div>
    )
  }
}

export default CreateAccount;