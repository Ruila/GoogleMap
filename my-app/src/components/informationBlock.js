import React, { Component } from 'react';


class InformationBlock extends Component {
  constructor(props) {
    super(props);
    this.state={ 
      text: "maker"
    }
    
  }
  render(){
    return(
      <div id="informationBlock" className={`${this.props.informBlockShow?'': 'hide'}`}>
        {this.state.text}
      </div>
    );
  }
}

export default InformationBlock;
