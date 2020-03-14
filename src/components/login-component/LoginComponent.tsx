import React from 'react';
import Wrapper from '../../utils/div-wrapper/Wrapper';
import Card from '@material-ui/core/Card';
import LoginFunction from '../../utils/login-function/LoginFunction';

interface ILoginProps {
    currentUser: any,
    loggedIn: boolean,
    loginMessage: string,
    login: (u: string, p: string) => void // login method that will be passed to login action through container
}

export class LoginComponent extends React.Component<ILoginProps, any>{
    constructor(props: any) {
        super(props)
    }



    render() {
        return (
            <Wrapper elements = 'REVATURE'>
                <Card className = 'full-card' style= {{textAlign: 'center'}}>
                <h1>RESOURCE MANAGEMENT SYSTEM</h1>
                <LoginFunction/>
                <p>{this.props.loginMessage}</p>
                </Card>
                
            </Wrapper>
        )
    }
}