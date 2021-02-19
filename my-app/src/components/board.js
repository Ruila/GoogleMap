import React, { Component } from 'react';


class Board extends Component {
  constructor(props) {
    super(props);
    this.state={ 
      places: []
    }
    this.filterRating = this.filterRating.bind(this);
    this.filterPrice = this.filterPrice.bind(this);
  }
  componentDidMount () {
    
  }
  componentDidUpdate(prevProps, prevState){
    if(prevProps.places!==this.props.places){
      this.setState({places: this.props.places})
      }
  }
  filterPrice() {
    let ary = JSON.parse(JSON.stringify(this.state.places));
      for(let i=0; i<ary.length; i++) {
        for(let j=0; j<ary.length-i-1;j++) {
          if(!ary[j].price_level) ary[j].price_level=0;
          if(!ary[j+1].price_level) ary[j+1].price_level=0;
          console.log(ary[j].price_level)
          if(ary[j].price_level < ary[j+1].price_level) {
            let tmp = ary[j];
            ary[j] = ary[j+1];
            ary[j+1] = tmp;
          }
        }
      }
      this.setState({places: ary})
  }
  filterRating() {
      let ary = JSON.parse(JSON.stringify(this.state.places));
      for(let i=0; i<ary.length; i++) {
        for(let j=0; j<ary.length-i-1;j++) {
          if(ary[j].rating < ary[j+1].rating) {
            let tmp = ary[j];
            ary[j] = ary[j+1];
            ary[j+1] = tmp;
          }
        }
      }
      this.setState({places: ary})
  }
  render(){
    const placesList = this.state.places.map(item=>{
      return <div key={item.place_id} className="location_unit">
              <h5>{item.name}</h5>
            </div>
    })
    return(
      <div id="Board">
        <div className="filter">
          <div className="btn" onClick={this.filterRating}>
            <span>評價(高-低)</span>
          </div>
          <div className="btn" onClick={this.filterPrice}>
            <span>價錢(高-低)</span>
          </div>
          <div className="btn">
            <span>距離</span>
          </div>
        </div>
        {placesList}
      </div>
    );
  }
}

export default Board;
