import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

class CreateAccount extends Component{
  render(){
    return(
      <div width = '100%' height = '100%' style={{backgroundColor: '#f5f5f5'}}>
        <Header/>
        <AccountForm/>
      </div>
    )
  }
}

class Header extends Component{
  render(){
    return(
      <div>
        <h1 align="center">GetHigher'd</h1>
      </div>
    )
  }
}
class AccountForm extends Component{
  constructor(){
    super();
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
      
  }

  handleChange(event){
    this.setState({
      [event.target.name]: event.target.value

    });
  }

  handleSubmit(event) //to see if it works
  {
    console.log(this.state.firstName);
    console.log(this.state.lastName);
    console.log(this.state.email);
    console.log(this.state.password);
    event.preventDefault();
  }

  render(){
     return(
       <form  onSubmit = {this.handleSubmit}> 
         <div class="form-label-group">
           <label for="inputFirstName">First Name:</label>
             <input type="text" 
                    name = "firstName"
                    id="inputFirstName"
                    class="form-control" 
                    placeholder="First name"
                    value = {this.state.firstName}
                    onChange = {this.handleChange}
                    required>
             </input>
         </div>
         <div class="form-label-group">
           <label for="inputLastName">Last Name:</label>
             <input type="text"
                    name="lastName"
                    id="inputLastName" 
                    class="form-control" 
                    placeholder="Last name"
                    value = {this.state.lastName}
                    onChange = {this.handleChange}
                    required>
             </input>
         </div>
         <div class="form-label-group">
           <label for="inputEmail">Email address:</label>
             <input type="email"
                    name="email" 
                    id="inputEmail" 
                    class="form-control" 
                    placeholder="Email address"
                    value = {this.state.email}
                    onChange = {this.handleChange} 
                    required autofocus>
             </input>
         </div>
         <div class="form-label-group">
           <label for="inputPassword">Password:</label>
             <input type="password"
                    name="password" 
                    id="inputPassword" 
                    class="form-control" 
                    placeholder="Password"
                    value = {this.state.password}
                    onChange = {this.handleChange} 
                    required>
             </input>
         </div>
        <button class="btn btn-lg btn-primary btn-block" type="submit">Create Account</button>
      </form>
    )
  }
}

export default CreateAccount;