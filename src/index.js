import React from 'react';
import ReactDOM from 'react-dom';
import Login from "./components/login"
import Signup from "./components/signup"
import Tweet from "./components/tweet"
import CardExample from "./components/CardExampleHeaderCard"
import Home from "./components/home"
import User from "./components/user"

// ReactDOM.render(<Home userID="zecheng@gmail.com"/>, document.getElementById('root'));
// ReactDOM.render(<CardExample/>, document.getElementById('root'));
ReactDOM.render(<User userID="zecheng@gmail.com" pageHostID="zecheng@gmail.com"/>, document.getElementById('root'));