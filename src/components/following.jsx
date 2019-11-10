import React from 'react';

class Following extends React.Component{

    state = {
        followingID:[],
        followingName: []
    }

    componentDidMount = () => {
        const getAllUser = "https://tweet-app-function.azurewebsites.net/api/getUser?code=ann2CvQtMfr1V4UUsBYsy2XsgEzGMsmBmmAoW1Z5h29WUQufwUYamQ==&userID="+this.props.userID;
        const getAllFollowingID = "https://tweet-app-function.azurewebsites.net/api/getFollowing?code=umSphsj8VXco1EfOFIpfWlYIPNJ3in0uwkQ8YwT5BqpUE8v4Mf2b0w==&userID="+this.props.userID;
        fetch(getAllFollowingID).then(res => res.json()).then(data => this.setState({followingID: data}));
        // fetch(url).then(res => res.json()).then(data => console.log(data));
        let followingName;
        fetch(getAllUser).then(res => res.json()).then(data => this.setState({followingName: data}))
        .then(
            console.log(this.state.followingName)
        );

    }

    //conditional rendering
    redenrFollowing = () => {
        if (this.state.followingID.length === 0) return <h3> Currently Not Have Following </h3>;
        return <ul> {this.state.followingName.map(user => 
            <div class="ui relaxed divided list">
                <div class="item">
                    <i class="large user circle middle aligned icon"></i>
                    <div class="content">
                        <a class="header">{user.Name}</a>
                        <div class="description">{user.UserID}</div>
                    </div>
                </div>
            </div>
        )} </ul>; 
    }
    
    render(){
        return(
            <div>
                <div class="ui labeled button" tabindex="0">
                    <div class="ui blue button">
                        <i class="child icon"></i> 2
                    </div>
                    <a class="ui basic blue bottom pointing label">
                    Following
                    </a>
                </div>
                {this.redenrFollowing()}
     
            </div>
        );
    }
}

export default Following;