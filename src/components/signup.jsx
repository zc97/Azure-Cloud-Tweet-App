import React from 'react';
import Login from "./login"

class Signup extends React.Component{

    state = {
        userID:"",
        userName:"",
        password:"",
        confirmationPassword:"",
        login:0
    }

    userIDChangeHandler = (event) => {
        this.setState({userID: event.target.value});
    }

    userNameChangeHandler = (event) => {
        this.setState({userName: event.target.value});
    }

    passwordChangeHandler = (event) => {
        this.setState({password: event.target.value});
    }

    passwordConfirmationChangeHandler = (event) => {
        this.setState({confirmationPassword: event.target.value});
    }

    sumbitHandler = () => {
        if(this.state.password === this.state.confirmationPassword){
            alert("signup successfully");
            this.setState({login:1});
        } else {
            alert("password not confirmed");
        }
    }

    loginListener = () => {
        return(
            <div>
                    Email:
                    <input type="text" onChange={this.userIDChangeHandler}/>
                    User Name:
                    <input type="text" onChange={this.userNameChangeHandler}/>
                    Password:
                    <input type="password" onChange={this.passwordChangeHandler}/>
                    Confirmation Password:
                    <input type="password" onChange={this.passwordConfirmationChangeHandler}/>
                    <button onClick = {this.sumbitHandler}>sign up</button>
            </div>
        )
    }

    render(){
        if(this.state.login===1) return <Login/>
        return(
            <div>
            {this.loginListener()}
            </div>
        );
    }
}

export default Signup;