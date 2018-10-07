import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { registerUser } from '../actions/userActions';
class AccountForm extends Component{
    constructor(){
      super();
      this.state = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirm_password: ''
      }
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
        
    }
  
    handleChange(event){
      this.setState({
        [event.target.name]: event.target.value
      });
    }
  
    handleSubmit(event) {
      if(this.state.password !== this.state.confirm_password) {
        alert('Your passwords don\'t match!');
      } else {
        this.props.registerUser({
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            password: this.state.password
        });
    }
        event.preventDefault();
    }
  
    render(){
      return(
        <form class = 'jumbotron vertical-center' onSubmit = {this.handleSubmit}>
        <fieldset class ="form-group">
        <legend align = "center">Create your GetHigher'd account</legend>
          <div class = "form-row">
            <div class="col mb-3">
              <input type="text" 
                      name = "firstName"
                      id="inputFirstName"
                      class="form-control" 
                      placeholder="First name"
                      value = {this.state.firstName}
                      onChange = {this.handleChange}
                      required/>
              </div>
           <div class="col mb-3">
              <input type="text"
                      name="lastName"
                      id="inputLastName" 
                      class="form-control" 
                      placeholder="Last name"
                      value = {this.state.lastName}
                      onChange = {this.handleChange}
                      required/>
          </div>
           </div>
           <div class="form-label-group mb-3">
              <input type="email"
                    name="email" 
                    id="inputEmail" 
                    class="form-control" 
                    placeholder="Email address"
                    value = {this.state.email}
                    onChange = {this.handleChange} 
                    required autofocus/>
           </div>
           <div class="form-label-group mb-3">
              <input type="password"
                    name="password" 
                    id="inputPassword" 
                    class="form-control" 
                    placeholder="Password"
                    value = {this.state.password}
                    onChange = {this.handleChange} 
                    required/>
            </div>
            <div class="form-label-group mb-3">
              <input type="password"
                    name="confirm_password" 
                    id="inputConfirmPassword" 
                    class="form-control" 
                    placeholder="Confirm Password"
                    value = {this.state.confirm_password}
                    onChange = {this.handleChange} 
                    required/>
            </div>
          </fieldset>
          <button className="btn btn-lg btn-primary btn-block" type="submit">Create Account</button>
        </form>
      )
    }
  }

  function mapStateToProps({ user }) {
      return { user };
  }

  function mapDispatchToProps(dispatch) {
      return bindActionCreators({registerUser}, dispatch);
  }

  export default connect(mapStateToProps, mapDispatchToProps)(AccountForm);