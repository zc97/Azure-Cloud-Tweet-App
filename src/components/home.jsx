import React from 'react';
import Tweet from "./tweet";
import Following from "./following";
import Post from "./post";
import { width, height } from 'dom-helpers';

const mystyle = {
      overflowY: "scroll",
      height: "900px"
    };

class Home extends React.Component{

    state = {
       
    }
    
    render(){
        return(
            <div class="ui container">
                <div class="ui top fixed menu">
                    <img src="https://img.icons8.com/carbon-copy/49/000000/cloud.png"/>
                    
                    <a class="item">Home</a>
                    <a class="item">About Me</a>
                    <a class="item">Sign-in</a>

                    <div class="right item">
                            <div class="ui big action input">
                                <input type="text" placeholder="Search People..."/>
                            <div class="ui button">Go</div>
                        </div>
                    </div>
                </div>
                
                <div class="ui grid">
                    {/* <div class="three wide column"> <br/><br/><Following userID = "zecheng@gmail.com"/></div> */}
                    <div class="ten wide column" style={mystyle}> <br/><br/><Tweet userID = "zecheng@gmail.com"/></div>
                    <div class="six wide column" ><br/><br/> <Post userID = "zecheng@gmail.com"/> <br/> <br/>  <br/> <Following userID = "zecheng@gmail.com"/></div>
                </div>
            </div>
        );
    }
}

export default Home;