import React from 'react';

const mystyle = {
    width: "300px",
};
  

class Post extends React.Component {
    state = { 
        content:"",
        posted:0
    }

    postHandler = () => {
        const postTweetAPI = "https://tweet-app-function.azurewebsites.net/api/addTweet?code=fb7tiN21BTCYD6oWalEqAllV3niK1AtHYG00f88eoZF6ZKSVLybbaA==&userID="+this.props.userID+"&content="+this.state.content;
        fetch(postTweetAPI).then(res => res.text()).then(data => alert(data));
        this.setState({content:""});
        this.setState({posted:1});
        }

    contentChangeHandler = (event) => {
        this.setState({content: event.target.value});
    }


    textField = () => {
        return <div class="field">
                    <textarea style = {mystyle} placeholder="What's happening..." onChange={this.contentChangeHandler}></textarea>
                </div>
    }

    // componentDidUpdate = () => {
    // }

    render() {
        if(this.state.posted===1) return <Post userID =  {this.props.userID}/>
        return (
            <div>
                <div class="ui form">
                    <button class="ui submit primary button" onClick={()=>{this.postHandler();}}>
                    Tweet
                    </button> <br/><br/>
                    <div class="field">
                        <textarea style = {mystyle} placeholder="What's happening..." onChange={this.contentChangeHandler}></textarea>
                    </div>  
                </div>
            </div>
        );
    }
}
 
export default Post;