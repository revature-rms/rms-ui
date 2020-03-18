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
        this.state = {
            username: '',
            password: ''
        }
    }

    handleChange = (event:any) => {
        const {name, value} = event.target;
        this.setState({
            ...this.state,
            [name]: value
        })
    }

    signUserIn = () => {
        this.props.login(this.state.username, this.state.password);
    }


    render() {
        return (
            <Wrapper data-test="main-content" elements = 'REVATURE'>
                <Card className = 'full-card' style= {{textAlign: 'center'}}>
                <h1>RESOURCE MANAGEMENT SYSTEM</h1>
                <LoginFunction
                    username = {this.state.username}
                    password = {this.state.password}
                    handleChange = {this.handleChange}
                    handleLogin = {this.signUserIn}
                    loginMessage = {this.props.loginMessage}
                />
                <br/>
                <br/>
                <small>This application is for authorized personel only. For more information on Revature and what we do, click <a href="https://revature.com" target ="_blank">here</a></small>
                </Card>
                
            </Wrapper>
        )
    }
}