import React, { useState } from 'react'
import "./SignIn.css"
import Header from '../Header/Header'
import { Link } from 'react-router-dom'
import useSignIn from '../../data/useSignIn';

function SignIn() {

    const [isSignIn, changeSignInStatus] = useSignIn();
    const [pageStatus, setPageStatus] = useState(isSignIn);
    const userSignIn = () => {
        console.log("User Sign Inned");
    }

    return (
        <section className='sign-in-container'>
            <Header />
            <section className='welcome-pane'>
                <p>به</p>
                <p>صفحه ثبت نام</p>
                <p>خوش آمدید!</p>
            </section>
            <section className="sign-in-pane">
                <section className="inputs-container">
                    <input className='input' type="text" placeholder='ایمیل' />
                    <input className='input' type="text" placeholder='رمز عبور' />
                    {
                        <p>
                            {pageStatus ? (<span>هنوز ثبت نام نکرده ام : </span>) : (<span> قبلا ثبت نام کرده ام : </span>)}
                            <span className='go-to-sign-in' onClick={() => setPageStatus(!pageStatus)}>
                                {pageStatus ? (<span>صفحه ثبت نام </span>) : (<span> صفحه ورود</span>)}
                            </span>
                        </p>
                    }
                    <button className='sign-in-btn'>
                        {pageStatus ? (<span>ورود</span>) : (<span>ثبت نام</span>)}
                    </button>
                </section>
            </section>
        </section>
    )
}

export default SignIn