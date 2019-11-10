import React from 'react';
import Home from './home';
import Signup from './signup';

class Login extends React.Component{
    state = {
        user:"",
        password:"",
        ifExist:"false",
        load:0,
        signup:0
    }

    sumbitHandler = (event) => {
        event.preventDefault();
        const checkIfUserExist = "https://tweet-app-function.azurewebsites.net/api/checkUserExist?code=Uc6JQR0mQ0adwWsBYuW/28v4svbH6Zt/KNxjl0GgFL6OREXgmOqeLg==&userID="+this.state.user+"&password="+this.state.password;
        this.setState({load: 1});
        alert("You are submitting " + this.state.user + this.state.password);
        fetch(checkIfUserExist).then(res => res.text()).then(data => this.setState({ifExist: data})).then(this.setState({load: 0}));
        // console.log(this.state.user);
        // console.log(this.state.ifExist);
    }

    userNameChangeHandler = (event) => {
        this.setState({user: event.target.value});
    }

    passwordChangeHandler = (event) => {
        this.setState({password: event.target.value});
    }

    signupHandler= () => {
        this.setState({signup:1});
    }

    loginListener = () => {
        if (this.state.ifExist === "false") return (
        // <div>
        //     <form onSubmit={this.sumbitHandler}>
        //         User Name:
        //         <input type="text" name="UserName" onChange={this.userNameChangeHandler}/>
        //         Password:
        //         <input type="password" name="Password" onChange={this.passwordChangeHandler}/>
        //         <input type="submit" value="Submit"></input>
        //     </form>
        // </div>
        <div className="ui grid">
                <div className="three wide column" ></div>
                <div className="ten wide column" >
                    <br/><br/><br/><br/><br/><br/><br/><br/><br/>
                    <div className="ui middle aligned center aligned grid">
                        <div className="column">
                            <h2 className="ui teal image header">
                                <img src="https://img.icons8.com/carbon-copy/49/000000/cloud.png" className="image"/>
                                <div className="content">
                                    Log-in to your account
                                </div>
                            </h2>
                        <form className="ui large form">
                            <div className="ui stacked segment">
                                <div className="field">
                                    <div className="ui left icon input">
                                        <i className="user icon"></i>
                                        <input type="text" name="email" placeholder="E-mail address" onChange={this.userNameChangeHandler}/>
                                    </div>
                                </div>
                                <div className="field">
                                    <div className="ui left icon input">
                                        <i className="lock icon"></i>
                                        <input type="password" name="password" placeholder="Password" onChange={this.passwordChangeHandler}/>
                                    </div>
                                </div>
                            <div className="ui fluid large teal submit button" onClick={this.sumbitHandler}>Login</div>
                            </div>

                            <div className="ui error message"></div>
                        </form>

                        <div className="ui message">
                        New User? <a onClick={this.signupHandler}>Sign Up</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="three wide column" ></div>
        </div>
        );
        if (this.state.ifExist === "true") return (
            <div>
                 <Home userID={this.state.user}/>
            </div>
        );
    }

    render(){
        if(this.state.signup === 1) return <Signup/>
        return(
            <div>
            {this.loginListener()}
            </div>
        );
    }
}

export default Login;