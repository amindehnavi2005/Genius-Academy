import React, { useState } from 'react'
import "./SignIn.css"
import Header from '../Header/Header'
import { Link } from 'react-router-dom'


function SignIn() {

    const [pageStatus, setPageStatus] = useState(false);

    const [username, setUsername] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");

    const userSignIn = () => {

        let userInfo = {
            username,
            userEmail,
            userPassword,
        }

        fetch("http://localhost:3000/users", {
            method: "POST",
            body: JSON.stringify(userInfo),
        }).then(
            (response) => {
                if (response.status == 200 || response.status == 201) {
                    if (localStorage.getItem("userInfo")) {
                        localStorage.setItem("userInfo", JSON.stringify(userInfo));
                    } else {
                        localStorage.setItem("userInfo", JSON.stringify(userInfo));
                    }
                    localStorage.setItem("isSignIn", true);
                } else {
                    alert("مشکلی به وجود آمده است.");
                }
            }
        );
    }

    const userLogin = () => {
        let userInfo = {
            userEmail,
            userPassword,
        };

        fetch("http://localhost:3000/users", {
            method: "GET",
        }).then(
            (response) => response.json()
        ).then(
            array => {
                let newData = array.filter((data) => {
                    return data.userEmail == userEmail;
                });
                if (localStorage.getItem("userInfo")) {
                    localStorage.setItem("userInfo", JSON.stringify(newData));
                } else {
                    localStorage.setItem("userInfo", JSON.stringify(newData));
                }
                localStorage.setItem("isSignIn", true);
            }
        )

    }

    return (
        <section className='sign-in-container'>
            <Header />
            <section className='welcome-pane'>
                <p>به</p>
                {pageStatus ? (<p>صفحه ورود</p>) : (<p>صفحه ثبت نام</p>)}
                <p>خوش آمدید!</p>
            </section>
            <section className="sign-in-pane">
                <section className="inputs-container">
                    {
                        pageStatus == false ? (
                            <input className='input' type="text" value={username} onChange={(event) => setUsername(event.target.value)} placeholder='نام کاربری' />
                        ) : null
                    }
                    <input className='input' type="text" value={userEmail} onChange={(event) => setUserEmail(event.target.value)} placeholder='ایمیل' />
                    <input className='input' type="text" value={userPassword} onChange={(event) => setUserPassword(event.target.value)} placeholder='رمز عبور' />
                    {
                        <p>
                            {pageStatus ? (<span>هنوز ثبت نام نکرده ام : </span>) : (<span> قبلا ثبت نام کرده ام : </span>)}
                            <span className='go-to-sign-in' onClick={() => setPageStatus(!pageStatus)}>
                                {pageStatus ? (<span>صفحه ثبت نام </span>) : (<span> صفحه ورود</span>)}
                            </span>
                        </p>
                    }
                    {
                        pageStatus ? (
                            <button className="sign-in-btn" onClick={userLogin}>
                                ورود
                            </button>
                        )
                            : (
                                <button className="sign-in-btn" onClick={userSignIn}>
                                    ثبت نام
                                </button>
                            )
                    }
                </section>
            </section>
        </section>
    )
}

export default SignIn