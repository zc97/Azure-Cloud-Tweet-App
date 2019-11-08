import React from 'react';

const mystyle = {
    width: "400px"
  };
  

class Post extends React.Component {
    state = { 
        content:""
    }

    postHandler = () => {
        const postTweetAPI = "https://tweet-app-function.azurewebsites.net/api/addTweet?code=fb7tiN21BTCYD6oWalEqAllV3niK1AtHYG00f88eoZF6ZKSVLybbaA==&userID="+this.props.userID+"&content="+this.state.content;
        fetch(postTweetAPI).then(res => res.text()).then(data => alert(data));
    }

    contentChangeHandler = (event) => {
        this.setState({content: event.target.value});
    }


    render() { 
        return (
            <div>
                    {/* Add Tweet:
                    <input type="text" name="Content" onChange={this.contentChangeHandler}/>
                    <button onClick={this.postHandler}>post</button> */}

                    <div class="ui form">
                            <button class="ui primary button" onClick={this.postHandler}>
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