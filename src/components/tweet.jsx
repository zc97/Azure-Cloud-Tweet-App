import React from 'react';
import { Card, Container, Image } from 'semantic-ui-react'

const mystyle = {
    width: "1000px"
  };

class Tweet extends React.Component{ 

    state = {
        tweets:[],
        followingID:[]
    }

    componentDidMount = () => {

        let mockTweets = [{"name":"ads","content":"sad","date":""}];
        let tweets = [];

        const url = "https://tweet-app-function.azurewebsites.net/api/getTweets?code=liPwM5RVQH973VUaH2La7wMoQUEBv7U/NM6Ch08jAtdAK3a7Chdn6A==&userID=";
        const getFollowingAPI = "https://tweet-app-function.azurewebsites.net/api/getFollowing?code=umSphsj8VXco1EfOFIpfWlYIPNJ3in0uwkQ8YwT5BqpUE8v4Mf2b0w==&userID="+this.props.userID;
        let query = this.props.userID;

        //fetch the own post of crrent user
        fetch(url+query).then(res => res.json()).then(data => this.setState({tweets: data})); 

        //promise function get following data
        let getfollowing = function(){
            return new Promise(function(resolve, reject){
                    fetch(getFollowingAPI)
                    .then(res => res.json())
                    .then(data => resolve(data));
                });
        };

        getfollowing().then(function(data){
            console.log(data);
        })

        this.setState({followingID: [this.props.userID]});
        // console.log(this.state.followingID);
        
        fetch(getFollowingAPI)
        .then(res => res.json())
        .then(data => this.setState({followingID: data}))
        .then(
            this.state.followingID.map(id => {
                // console.log(id.followingID);
                fetch(url+id.followingID)
                .then(res => res.json())
                .then(data => {
                    console.log("fetched others tweets");
                    this.setState({tweets: this.state.tweets.concat(data)})
                });
        }));

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
                            <Card.Meta>Friends of Elliot</Card.Meta>
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
                    <div class="fluid ui vertical animated button" tabindex="0" onClick={this.componentDidMount}>
                        <div class="hidden content">Refersh</div>
                        <div class="visible content">
                            <i class="sync alternate icon"></i>
                        </div>
                    </div>
                    <br/><br/>
                        {this.renderTweets()}
                </div>
        );
    }
}

export default Tweet;