import React from 'react';
import { Card, Container, Image } from 'semantic-ui-react'

const mystyle = {
    width: "300px"
  };

class UserTweet extends React.Component{ 

    state = {
        tweets:[]
    }

    componentDidMount = () => {


        const url = "https://tweet-app-function.azurewebsites.net/api/getTweets?code=liPwM5RVQH973VUaH2La7wMoQUEBv7U/NM6Ch08jAtdAK3a7Chdn6A==&userID=";
        let query = this.props.userID;

        //fetch the own post of crrent user
        fetch(url+query).then(res => res.json()).then(data => this.setState({tweets: data})); 

    }


    //conditional rendering
    renderTweets = () => {
        if (this.state.tweets.length === 0) return <h1> there is no tweet </h1>;
        return (
        <ul> 
            {this.state.tweets.map(tweet => 
                <Card.Group>
                    <Card style = {mystyle}>
                        <Card.Content>
                            <img class="right floated mini ui image" src="https://img.icons8.com/plasticine/100/000000/user.png"/>
                            <Card.Header>{tweet.name} </Card.Header>
                            <Card.Meta>{tweet.date}</Card.Meta>
                            <Card.Description>
                            <h3>{tweet.content}</h3>
                            </Card.Description>
                        </Card.Content>
                    </Card>
                </Card.Group>
            )} 
        </ul>
        
        );
    }
    
    render(){
        return(
            <div>
                    <div class="ui big label">
                        Recent Tweets
                    </div><br/><br/>
                    {this.renderTweets()}
            </div>
        );
    }
}

export default UserTweet;