import React, { Component } from 'react';
import { connect } from 'react-redux';

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
        {this.props.location_info.name}
        <div></div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    shopInfo: state.shopInfo
  }
}

export default connect(mapStateToProps)(InformationBlock);
