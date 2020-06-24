import React, { useState, useEffect } from 'react';
import Wrapper from '../../utils/div-wrapper/Wrapper';
import Card from '@material-ui/core/Card';
import LoginFunction from '../../utils/login-function/LoginFunction';
import { AppUser } from '../../dtos/appUser';
import { LoginAnimationComponent } from "../login-animation-component/LoginAnimationComponent"
import { Link } from 'react-router-dom';


export interface ILoginProps {
    authUser: AppUser | undefined,
    loginMessage: string,
    login: (u: string, p: string, action:string) => void // login method that will be passed to login action through container
}

/**
 * This is used as a login screen. If correct credentials are used, it will log the user in and redirect to the HomeComponent
 * Role needed: ANY, no role required to view
 * Endpoint: .../login
 * 
 * Note: This component has been refactored from a class component. Refactoring is (most likely) still
 *       in progress due to half of the loginComponent being located in src/utils/login-function/LoginFunction.tsx
 * 
 */
export default function LoginComponent(props: ILoginProps) {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    //Set props
    const setInfo = (event: any) => {
        switch (event.target.id) {
            case "username":
                setUsername(event.target.value);
                break;
            case "password":
                setPassword(event.target.value);
                break;
        }
    }

    const signUserIn = async () => {
        props.login(username, password, "login");
    }

    return (
        <>
                <div className="animation-mask-top"></div>
                <div className="animation-frame">
                    <div className="login-ribbon unselect">
                        <div className="login-logo"></div>
                    RESOURCE MANAGEMENT SYSTEM
                <div className="login-holder">
                            <form className="login-form-holder">
                                <div className="login-label unselect">Username</div>
                                <input
                                    className="login-label"
                                    required
                                    type="text"
                                    id="username"
                                    placeholder="Username"
                                    name="username"
                                    value={username}
                                    onChange={setInfo}
                                />
                                <div className="login-label unselect">Password</div>
                                <input
                                    className="login-label"
                                    required
                                    type="password"
                                    id="password"
                                    placeholder="Enter Password"
                                    name="password"
                                    value={password}
                                    onChange={setInfo}
                                />
                                <Link to="/">
                                    <button id="loginButton" type="button" onClick={signUserIn} className="login-btn" >Sign in</button>
                                </Link>
                            </form>
                            <div>{props.loginMessage}</div>
                        </div>
                    </div>
                    <LoginAnimationComponent />
                </div>
                <div className="animation-mask-bottom">
                    <div className="auth-text">
                        This application is for authorized personel only.
                <br />
                For more information on Revature and what we do, click <a href="https://revature.com" target="_blank">here</a>
                    </div>
                </div>
        </>
    )
}