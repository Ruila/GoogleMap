import React, { Component } from 'react';
import { connect } from 'react-redux';
import InformationBlock from './informationBlock.js';

class LocationListUnit extends Component {
  constructor(props) {
    super(props);
    this.state={ 
      informBlockShow: false,
    }
    this.showInformBlock = this.showInformBlock.bind(this);
    this.hideInformBlock = this.hideInformBlock.bind(this);
  }
  showInformBlock () {
    this.setState({informBlockShow: true})
    console.log('in informationblock', this.props.shopInfo)
  }
  hideInformBlock () {
    this.setState({informBlockShow: false})
  }
  render(){
    return(
      <div className="location_unit" onMouseEnter={this.showInformBlock} onMouseLeave={this.hideInformBlock}>
        <h5>{this.props.location_info.name}</h5>
        <InformationBlock informBlockShow={this.state.informBlockShow} location_info={this.props.location_info}/>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    shopInfo: state.shopInfo
  }
}

export default connect(mapStateToProps)(LocationListUnit);
