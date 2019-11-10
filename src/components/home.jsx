import React from 'react';
import Tweet from "./tweet";
import Following from "./following";
import Post from "./post";
import User from "./user"

const mystyle = {
      overflowY: "scroll",
      height: "900px"
    };

class Home extends React.Component{

    state = {
        homePage: 1,
        userPage: 0,
        searchID: "",
        content:"",
        posted:0
    }

    search = () => {
        this.setState({homePage:0});
        this.setState({userPage:1});
    }

    home = () => {
        this.setState({homePage:1});
        this.setState({userPage:0});
    }

    searchChangeHandler = (event) => {
        this.setState({searchID: event.target.value});
    }

    postHandler = () => {
        const postTweetAPI = "https://tweet-app-function.azurewebsites.net/api/addTweet?code=fb7tiN21BTCYD6oWalEqAllV3niK1AtHYG00f88eoZF6ZKSVLybbaA==&userID="+this.props.userID+"&content="+this.state.content;
        fetch(postTweetAPI).then(res => res.text()).then(data => alert(data));
        this.setState({posted:1});
        }

    contentChangeHandler = (event) => {
        this.setState({content: event.target.value});
    }

    textField = () => {
        if(this.state.posted===1) {
            this.setState({content:""});
            this.setState({posted:0});
            return <textarea style = {mystyle} placeholder="What's happening..."></textarea>
        };
        return <textarea style = {mystyle} placeholder="What's happening..." onChange={this.contentChangeHandler}></textarea>            
    }
    
    render(){
        var userID = this.state.userID;
        var searchID = this.state.searchID;
        if(this.state.userPage === 1) return <User userID = {this.props.userID} searchID = {this.state.searchID}/>
        return(
            <div class="ui container">
                <div class="ui top fixed menu">
                    <img src="https://img.icons8.com/carbon-copy/49/000000/cloud.png"/>

                    <a class="item"></a>
                    
                    <a class="item" onClick={this.home}>Home</a>

                    <div class="right item">
                            <div class="ui big action input">
                                <input type="text" placeholder="Search People..." onChange={this.searchChangeHandler}/>
                            <div class="ui button" onClick={this.search}>Go</div>
                        </div>
                    </div>
                </div>

                {this.state.homePage === 1 &&
                    <div class="ui grid">
                        {/* <div class="three wide column"> <br/><br/><Following userID = "zecheng@gmail.com"/></div> */}
                        <div class="ten wide column" style={mystyle}> <br/><br/><Tweet userID = {this.props.userID}/></div>
                        <div class="six wide column" >
                            <br/><br/> 
                            {/* <Post userID={this.props.userID}/>  */}
                            <div>
                                <div class="ui form">
                                    <button class="ui submit primary button" onClick={()=>{this.postHandler();}}>
                                    Tweet
                                    </button> <br/><br/>
                                    <div class="field">
                                        {/* <textarea style = {mystyle} placeholder="What's happening..." onChange={this.contentChangeHandler}></textarea> */}
                                        {this.textField()}
                                    </div>  
                                </div>
                            </div>
                            <br/><br/><br/> 
                            <Following userID = {this.props.userID}/></div>
                        </div>
                }
            </div>
        );
    }
}

export default Home;