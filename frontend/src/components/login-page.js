import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './header.js'

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
            <div style={{backgroundColor: '#e4d9cb'}}>
            <form  class = "col-md-4 offset-md-4 jumbotron vertical-center">
                <div class = 'jumbotron vertical-center' style={{backgroundColor: '#f5f5f5'}}>
                <Header/>
                    <legend class = 'pb-3' align = 'center'>Login</legend>
                    <div className="login-info px-5">
                    <input
                            class = 'form-control'
                            //className="login-email"
                            type="text"
                            placeholder="email"
                            onChange={event => this.setState({email: event.target.value})}

                    />
                        <br/> <br/>
                    <input
                            class = 'form-control'
                            //className="login-password"
                            type="password"
                            placeholder="password"
                            onChange={event => this.setState({password: event.target.value})}

                    /> 
                    <br/> <br/>
                    <button
                            className="btn btn-primary btn-large btn-block"
                            type="submit"
                    >
                            Login
                    </button>  
                    </div>
                </div>
            </form>
            </div>
        )
    }
}

export default LoginPage;