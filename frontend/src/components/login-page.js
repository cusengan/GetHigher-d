import React, {Component} from 'react'

class LoginPage extends Component{
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }
    
    render(){
        return(
            <div className="Login">
                <h2>Login</h2>
                <div className="login-info">
                   <input
                        className="login-email"
                        type="text"
                        placeholder="email"
                        onChange={event => this.setState({email: event.target.value})}

                   />
                   <input
                        className="login-password"
                        type="text"
                        placeholder="password"
                        onChange={event => this.setState({password: event.target.value})}

                   /> 
                   <button
                        className="btn btn-primary"
                        type="button"
                   >
                        Login
                   </button>  
                </div>
            </div>
        )
    }
}

export default LoginPage;