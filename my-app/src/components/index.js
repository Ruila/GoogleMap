import React, { Component } from 'react';
import axios from 'axios';
import {apikey} from "../key/mapkey.js";
import GoogleMapReact from 'google-map-react';
import '../css/style.css';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Map extends Component  {
  constructor() {
    super();
    this.state = {
        center: {
            lat: 25.04,
            lng: 121.50
        },
        zoom: 11
    }
    this.handleApiLoaded = this.handleApiLoaded.bind(this);
  }

  handleApiLoaded = (map, maps) => {
    // use map and maps objects
    console.log('載入完成!') // 印出「載入完成」
  };

  
  render(){
   return (
       <div id="map">
        <div className="content">
            <GoogleMapReact
            bootstrapURLKeys={{ key: apikey }}
            defaultCenter={this.state.center}
            defaultZoom={this.state.zoom}
            yesIWantToUseGoogleMapApiInternals // 設定為 true
            onGoogleApiLoaded={({ map, maps }) => this.handleApiLoaded(map, maps)} // 載入完成後執行
            >
            <AnyReactComponent
                lat={25.04}
                lng={121.50}
                text="My Marker"
            />
            </GoogleMapReact>
        </div>
       </div>
   )
    
  } 
}


export default Map;
