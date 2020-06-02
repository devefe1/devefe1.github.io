import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            userName: '',
            password: ''
         }
    }

    render() { 
        return ( 
            <div className='page' >
            <div className='login-page' >
                <form className='login' >
                    <input type="text" placeholder="User Name"/>
                    <input type="password" placeholder="Password" />
                    <button type="submit" > Login </button>
                </form>
                <Link id='noAccount' to='/signup' > <p> Don't have an account? Sign up </p>  </Link>
            </div>
            </div>
         );
    }
}
 
export default Login;