import React, {useEffect, useState} from "react";
import './sign-in.scss';
import FormInput from "../form-input/form-input";
import CustomButton from "../custom-button/custom-button";
import {signInWithGoogle} from "../../firebase/firebase.utils";

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = event => {
        event.preventDefault();
        setEmail('');
        setPassword('');
    }

    const handleChange = event => {
        const {value, name} = event.target;
        if (name === 'email') {
            setEmail(value);
        } else {
            setPassword(value);
        }
    }

    return (
        <div className='sign-in'>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput
                    name='email'
                    type='email'
                    handleChange={handleChange}
                    label='Email'
                    value={email}
                    required
                />
                <FormInput
                    name='password'
                    type='password'
                    value={password}
                    handleChange={handleChange}
                    label='Password'
                    required
                />
                <div className='buttons'>
                    <CustomButton type='submit'>Sign In</CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                        Sign In With Google
                    </CustomButton>
                </div>
            </form>
        </div>
    );
};

export default SignIn;