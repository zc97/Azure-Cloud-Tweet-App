import React from 'react';
import Home from './home';
import Following from './following';
import User from './user';
import Tweet from './tweet';
import Post from './post';

class Login extends React.Component{
    state = {
        user:"",
        password:"",
        token:0
    }

    sumbitHandler = (event) => {
        event.preventDefault();
        alert("You are submitting " + this.state.user + this.state.password);
        this.setState({token:1});
    }

    userNameChangeHandler = (event) => {
        this.setState({user: event.target.value});
    }

    passwordChangeHandler = (event) => {
        this.setState({password: event.target.value});
    }

    loginListener = () => {
        if (this.state.token === 0) return (
        <div>
            <form onSubmit={this.sumbitHandler}>
                User Name:
                <input type="text" name="UserName" onChange={this.userNameChangeHandler}/>
                Password:
                <input type="password" name="Password" onChange={this.passwordChangeHandler}/>
                <input type="submit" value="Submit"></input>
            </form>
        </div>
        );
        if (this.state.token === 1) return (
            <div>
                 {/* <Home userID={this.state.user}/> */}
                <Following userID={this.state.user}/>
                {/* <div><User userID={this.state.user}/></div> */}
                {/* <Tweet userID={this.state.user}/> */}
                {/* {<Post userID={this.state.user}/>} */}
            </div>
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

export default Login;