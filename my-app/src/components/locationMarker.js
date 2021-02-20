import React, { Component } from 'react';
import { connect } from 'react-redux';

class LocationMarker extends Component {
  constructor(props) {
    super(props);
    this.state={ 
      show: false,
    }
    this.showLocationName = this.showLocationName.bind(this);
    this.hideLocationName = this.hideLocationName.bind(this);
  }
  componentDidUpdate(prevProps, prevState){
    if(prevProps.informblock!==this.props.informblock){
        if(this.props.informblock.place_id===this.props.placeID){
          this.setState({show: true})
        } else {
          this.setState({show: false})
        }
      }
  }
  showLocationName () {
    this.setState({show: true})
  }
  hideLocationName () {
    this.setState({show: false})
  }
  render(){
    return(
      <div id="locationMarker">
        <div className="dot" onMouseEnter={this.showLocationName} onMouseLeave={this.hideLocationName}></div>
        <div className={`name ${this.state.show?'show':''}`}>{this.props.text}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    informblock: state.informblock,
  }
}

export default connect(mapStateToProps)(LocationMarker);
