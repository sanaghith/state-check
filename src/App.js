import React, { Component } from "react";
import "./App.css";
import Profile from "./Profile";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      person: {
        fullname: "sana ghith",
        bio: "dev",
        imgSrc:
          "https://miro.medium.com/v2/resize:fit:1400/1*hYSKyofnqThnPIsYRfnUUQ.png",
        profession: "student",
      },
      show : false
    };
  }


  handleShow = () => {
    this.setState({
      show : !this.state.show  
    })
  }

  // if(this.state.show === true){
        // dhaharli l profile component
  // }else{
        // 5abi l profile component
  // }




  render() {

    return (
      <div className="App">

        <button  onClick={this.handleShow} > { this.state.show ? "Hide profile" : "show profile" } </button>

        {
          this.state.show ? <Profile data={this.state.person} /> : <h1> arja3 ghodwa </h1>
        }
        
      </div>
    );
  }
}
