import React, {Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Signup extends Component{
    constructor(props) {
        super(props);
        this.state = {
            user: {
                email : '',
                userName: '',
                password: ''
            }
        };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    }

handleChange = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    let user = {...this.state.user};
    user[name] = value;
    this.setState({user});
}

handleSubmit = async (e) => {
    e.preventDefault();
    const {user} = this.state;
    try {
        const response = await axios.post ('/users', user)
        console.log(response.data)
    } catch (e) {
        console.log(e);
    }
}

render () {
    const {user} = this.state;
    return (
        <div className='page'>
            <div className= 'signupPage'>
                <form className= 'signup' onSubmit = {this.handleSubmit} >
                    <input type="email" placeholder= "Email" name = "email" value = {user.email || ''} onChange={this.handleChange} />
                    <input type="text" placeholder= "UserName" name = "userName" value = {user.userName || ''} onChange={this.handleChange} />
                    <input type="password" placeholder= "Password" name = "password" value = {user.password || ''} onChange={this.handleChange} />
                    <button type="submit" > Sign Up! </button>
                </form>
                    <Link id='yes-account' to = '/login' > <p> Already have an account? Log in </p></Link>
            </div>
        </div>
    );
  }
}

export default Signup;