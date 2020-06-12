import React, { useState, useEffect }from 'react';
import Wrapper from '../../utils/div-wrapper/Wrapper';
import Card from '@material-ui/core/Card';
import LoginFunction from '../../utils/login-function/LoginFunction';
import { AppUser } from '../../dtos/appUser';

export interface ILoginProps {
    authUser: AppUser,
    loginMessage: string,
    login: (u: string, p: string) => void // login method that will be passed to login action through container
}

export function LoginComponent(props: ILoginProps) {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    const setInfo = (event: any) => {
        switch(event.target.id){
            case "username":
                setUsername(event.target.value);
                break;
            case "password":
                setPassword(event.target.value);
                break;
        }

        console.log(username, password);
    }

    const signUserIn = () => {
        props.login(username, password);
    }


    return (
        <Wrapper data-test="main-content" elements = 'REVATURE'>
            <Card className = 'full-card' style= {{textAlign: 'center'}}>
            <h1>RESOURCE MANAGEMENT SYSTEM</h1>
            <LoginFunction
                username = {username}
                password = {password}
                handleChange = {setInfo}
                handleLogin = {signUserIn}
                loginMessage = {props.loginMessage}
            />
            <br/>
            <br/>
            <small>This application is for authorized personel only. For more information on Revature and what we do, click <a href="https://revature.com" target ="_blank">here</a></small>
            </Card>
            
        </Wrapper>
    )
    
}