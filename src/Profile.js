import React, { Component } from "react";

export default class Profile extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

    componentDidMount(){
      this.interval = setInterval(()=>{
          this.setState((prevState)=>({
            count : prevState.count + 1
          }))
      },1000)
    }

  

  componentWillUnmount(){
    clearInterval(this.interval)
  }

  render() {
    // console.log("props", this.state.count);
    return (
      <div>
        <div>
          <h1>full name : {this.props.data.fullname}</h1>
          <h1>bio: {this.props.data.bio}</h1>
          <h1>
            imgSrc: <img src={this.props.data.imgSrc} width="250" />{" "}
          </h1>
          <h1>profession :{this.props.data.profession} </h1>
        </div>

        <div>
          <h1>Time</h1>
          <h2> {this.state.count} </h2>
        </div>
      </div>
    );
  }
}
