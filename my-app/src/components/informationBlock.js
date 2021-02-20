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
    let content;
    if(this.props.informblock.place_idx || this.props.informblock.place_idx === 0) {
      const name = this.props.places[this.props.informblock.place_idx].name?this.props.places[this.props.informblock.place_idx].name:'None';
      const rating = this.props.places[this.props.informblock.place_idx].rating?this.props.places[this.props.informblock.place_idx].rating:'None';
      const price = this.props.places[this.props.informblock.place_idx].price_level?this.props.places[this.props.informblock.place_idx].price_level:'None';
      content = (
        <div className="content">
          <h5>{name}</h5>
          <h5>rating：{rating}</h5>
          <h5>price_level：{price}</h5>
        </div>
        
      );
    } else {
      content = (
        <div>NULL</div>
      );
    }
    return(
      <div id="informationBlock" className={`${this.props.informblock.state?'': 'hide'}`}>
        {content}
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    informblock: state.informblock,
  }
}

export default connect(mapStateToProps)(InformationBlock);
