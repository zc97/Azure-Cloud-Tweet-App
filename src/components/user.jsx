import React from 'react';
import Following from "./following";
import UserTweet from "./userTweet";
import Home from "./home"

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
        name:"",
        ifFollowing:false,
        searchID: "",
        search:0,
        home:0
    }

    componentDidMount = () => {
        const getUserName = "https://tweet-app-function.azurewebsites.net/api/getUserName?code=J/fEEGS1ts5z60wEZckm2/bw8HBPGnxPDyr5cPH1uVPjHb/QC5pW4Q==&userID="+this.props.searchID;
        fetch(getUserName).then(res => res.text()).then(data => this.setState({name: data}));
        console.log(this.state.name);
        {this.checkFollowing()};
    }

    addFollowing = () => {
        const addFollowing = "https://tweet-app-function.azurewebsites.net/api/addFollowing?code=MmadAndHfK28ASyd2aatu/7KW9w3wYkcG9jCHeeVXgJ235MEYJFE/Q==&userID="+this.props.userID+"&followingID="+this.props.searchID;
        this.setState({ifFollowing: true});
        fetch(addFollowing).then(res => res.text()).then(data => console.log("following added"));
    }

    unFollowing = () => {
        const unFollowing = "https://tweet-app-function.azurewebsites.net/api/deleteFollowing?code=lVefUfN9xOrE3rxsjER5/xpWxC2N1o3tLwm5H3pvn369iIGS20QKgQ==&userID="+this.props.userID+"&followingID="+this.props.searchID;
        this.setState({ifFollowing: false});
        fetch(unFollowing).then(res => res.text()).then(data =>console.log("unfollowed"));
    }

    checkFollowing = () => {
        const checkFollowing = "https://tweet-app-function.azurewebsites.net/api/checkFollowing?code=l5L62PKZcVjWK9Q0P4bLvNQILe2zYM8TqCwQGAXHP4ltD2dePgPEXw==&userID="+this.props.userID+"&followingID="+this.props.searchID
        ;
        fetch(checkFollowing).then(res => res.text()).then(data => {
                    var check = (data == 'true');
                    this.setState({ifFollowing: check});
                } 
            );
    }

    searchChangeHandler = (event) => {
        this.setState({searchID: event.target.value});
    }

    search = () => {
        this.setState({search:1});
    }

    home = () => {
        this.setState({home:1});
    }
    
    render(){
        console.log(this.props);
        if(this.state.search === 1) return <User userID={this.props.userID} searchID={this.state.searchID}/>;
        if(this.state.home === 1) return <Home userID={this.props.userID}/>;
        return(
            <div>
                <div class="ui top fixed menu">
                    <img src="https://img.icons8.com/carbon-copy/49/000000/cloud.png"/>
                    
                    <a class="item" onClick={this.home}>Home</a>

                    <div class="right item">
                            <div class="ui big action input">
                                <input type="text" placeholder="Search People..." onChange={this.searchChangeHandler}/>
                            <div class="ui button" onClick={this.search}>Go</div>
                        </div>
                    </div>
                </div>


                <div className="ui container">
                    <div className="ui grid">
                        <div className="six wide column" ><br/><br/><br/><br/>
                                <div class="ui right card" style = {myCardStyle}>
                                <a class="image" href="#">
                                <img src="https://img.icons8.com/dusk/196/000000/human-head.png"/>
                                </a>
                                <div class="content">
                                    <a class="header" href="#">{this.state.name}</a>
                                    <div class="meta">
                                    <a>{this.props.searhID}</a><br/><br/>
                                    
                                    {this.state.ifFollowing===false &&
                                    <div class="ui bottom attached button" onClick={this.addFollowing}>
                                        <i class="add icon"></i>
                                        Follow
                                    </div>
                                    }

                                    {this.state.ifFollowing===true &&
                                    <div class="ui bottom attached button" onClick={this.unFollowing}>
                                        Following
                                    </div>
                                    }
                                    </div>
                                </div>
                                </div>
                                <div style={mystyle}> <br/><br/><UserTweet userID = {this.props.searchID}/></div>
                        </div>
                        <div className="four wide column"><br/><br/><br/><br/><br/><Following userID={this.props.searchID}/></div>
                        <div className="four wide column"><br/><br/><br/><br/><br/><Following userID={this.props.searchID}/></div>
                        <div className="two wide column"></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default User;