import React from 'react';
import Tweet from "./tweet";

class Signup extends React.Component{

    state = {
        userID:"",
        userName:"",
        password:"",
        confirmationPassword:"",
        token:0
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
            this.setState({token:1});
        } else {
            alert("password not confirmed");
        }
    }

    loginListener = () => {

        if (this.state.token === 0) return (
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
        );
        if (this.state.token === 1) return (
                <Tweet userID = {this.state.userID}/>
        );
    }

    render(){
        return(
            <div>
            {this.loginListener()}
            </div>
        );
    }
}

export default Signup;