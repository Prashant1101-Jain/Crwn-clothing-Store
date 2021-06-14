import React from 'react';
import './sign-in.styles.scss';
import { Component } from 'react';
import FormInput from '../form-input/from-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {signInWithGoogle} from '../../firebase/firebase.utils'

class SignIn extends Component{
    constructor(){
        super();

        this.state={
            "email":'',
            "password": ''
        }
    };

    handleSubmit = event =>{
        event.preventDefault();
        this.setState({email:"", password: ""});
    }

    handleChange = event =>{
        const {value,name} = event.target
        this.setState({[name]:value})
    }

    render(){
        return(
            <div>
                <h1>I already have an account</h1>
                <span>Sign In with your email and password</span>
                
                <form onClick={this.handleSubmit} className ='sign-in'>
                    <FormInput 
                    name ='email' 
                    type = "email"
                    label = 'E-mail'
                    value = {this.state.email} 
                    handleChange ={this.handleChange}
                    requird/>
                    <FormInput 
                    name ='password'
                    type = "password" 
                    label ='Password'
                    value = {this.state.password} 
                    handleChange ={this.handleChange}
                    requird />
                    <div className = 'buttons'>
                        <CustomButton type='submt'> Sign In </CustomButton>
                        <CustomButton  onClick = {signInWithGoogle} isGoogleSignIn > Sign in with Google </CustomButton>
                    </div>
                    </form>
            </div>
        )
    }
};

export default SignIn;
