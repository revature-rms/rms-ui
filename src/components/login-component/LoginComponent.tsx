import React from 'react';
import Wrapper from '../../utils/div-wrapper/Wrapper';

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
            <Wrapper>
                <h1>Welcome to RMS</h1>
                <button className='btn'>Login</button>
                <p>{this.props.loginMessage}</p>
            </Wrapper>
        )
    }
}