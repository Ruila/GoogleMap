import React, { Component } from 'react';


class MyMaker extends Component {
  constructor(props) {
    super(props);
    this.state={ 
      text: "maker"
    }
    
  }
  render(){
    return(
      <div id="myMaker">
        {this.state.text}
      </div>
    );
  }
}

export default MyMaker;
