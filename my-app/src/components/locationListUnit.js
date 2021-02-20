import React, { Component } from 'react';
import { connect } from 'react-redux';

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
    this.props.dispatch({type: 'SHOW', place_idx: this.props.idx, place_id: this.props.location_info.place_id});
  }
  hideInformBlock () {
    this.setState({informBlockShow: false})
    this.props.dispatch({type: 'HIDE'});
  }
  render(){
    return(
      <div className="location_unit" onMouseEnter={this.showInformBlock} onMouseLeave={this.hideInformBlock}>
        <h5>{this.props.location_info.name}</h5>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
  }
}

export default connect(mapStateToProps)(LocationListUnit);
