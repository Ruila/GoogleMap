import React, { Component } from 'react';


class LocationMarker extends Component {
  constructor(props) {
    super(props);
    this.state={ 
      
    }
    
  }
  render(){
    return(
      <div id="LocationMarker">
        <div className="dot"></div>
        <div>{this.props.text}</div>
      </div>
    );
  }
}

export default LocationMarker;
