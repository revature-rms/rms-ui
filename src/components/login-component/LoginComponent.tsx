import React, { useState, useEffect } from 'react';
import Wrapper from '../../utils/div-wrapper/Wrapper';
import Card from '@material-ui/core/Card';
import LoginFunction from '../../utils/login-function/LoginFunction';
import { AppUser } from '../../dtos/appUser';
import { LoginAnimationComponent } from "../login-animation-component/LoginAnimationComponent"

export interface ILoginProps {
    authUser: AppUser,
    loginMessage: string,
    login: (u: string, p: string) => void // login method that will be passed to login action through container
}

/**
 * This function finds a user from an external API and passes their credentials as props
 * to be used by other components.
 * 
 * Note: This component has been refactored from a class component. Refactoring is (most likely) still
 *        in progress due to half of the loginComponent being located in src/utils/login-function/LoginFunction.tsx
 * 
 * @param props 
 */

export function LoginComponent(props: ILoginProps) {

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
        document.body.style.overflow = "auto";
        props.login(username, password);
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
                                <button type="button" onClick={signUserIn} className="login-btn" >Sign in</button>
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