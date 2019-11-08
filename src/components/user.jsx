import React from 'react';
import Following from "./following";
import UserTweet from "./userTweet";

const mystyle = {
    overflowY: "scroll",
    height: "450px"
  };

  const myCardStyle = {
    width: "400px"
  };

class User extends React.Component{

    state = {
        following:[],
        name:""
    }

    componentDidMount = () => {
        const getUserName = "https://tweet-app-function.azurewebsites.net/api/getUserName?code=J/fEEGS1ts5z60wEZckm2/bw8HBPGnxPDyr5cPH1uVPjHb/QC5pW4Q==&userID="+this.props.userID;
        fetch(getUserName).then(res => res.text()).then(data => this.setState({name: data}));
        console.log(this.state.name);
    }
    
    render(){
        return(
            <div className="ui container">
                <div className="ui grid">
                    <div className="six wide column" ><br/><br/>
                            <div class="ui right card" style = {myCardStyle}>
                            <a class="image" href="#">
                            <img src="https://img.icons8.com/dusk/196/000000/human-head.png"/>
                            </a>
                            <div class="content">
                                <a class="header" href="#">{this.state.name}</a>
                                <div class="meta">
                                <a>{this.props.pageHostID}</a><br/><br/>
                                
                                <div class="ui bottom attached button">
                                    <i class="add icon"></i>
                                    Add Friend
                                </div>

                                </div>
                            </div>
                            </div>
                            <div style={mystyle}> <br/><br/><UserTweet userID = {this.props.userID}/></div>
                    </div>
                    <div className="four wide column"><br/><br/><br/><Following userID={this.props.pageHostID}/></div>
                    <div className="three wide column"><br/><br/><br/><Following userID={this.props.pageHostID}/></div>
                    <div className="three wide column"></div>
                </div>
            </div>
        );
    }
}

export default User;