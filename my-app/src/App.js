import './App.css';
import Map from './components/index.js';
import React, { Component } from 'react';


class App extends Component {
  constructor(props) {
    super(props);
    this.state={ 
      myPosition_lat: 25.033710,
      myPosition_lng: 121.564718
    }
    this.setMyPosition = this.setMyPosition.bind(this);
  }

  setMyPosition(lat, lng){
    this.setState({myPosition_lat: lat})
    this.setState({myPosition_lng: lng})
  }

  render(){
    return(
      <div className="App">
        <Map setMyPosition={this.setMyPosition} myPosition_lat={this.state.myPosition_lat} myPosition_lng={this.state.myPosition_lng} />
      </div>
    );
  }
}

export default App;
