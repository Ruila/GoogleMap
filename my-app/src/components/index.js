import React, { Component } from 'react';
import axios from 'axios';
import {apikey} from "../key/mapkey.js";
import GoogleMapReact from 'google-map-react';
import MyPositionMarker from './myMaker.js';
import '../css/style.css';

class Map extends Component  {
  constructor() {
    
    super();
    this.state = {
        center: {
            lat: 25.04,
            lng: 121.50
        },
        mapApiLoaded: false,
        mapInstance: null,
        mapApi: null,
        zoom: 11
    };
    this.handleApiLoaded = this.handleApiLoaded.bind(this);
    this.handleCenterChange = this.handleCenterChange.bind(this);
    this.setMapApi = this.setMapApi.bind(this);
    this.setMapApiLoaded = this.setMapApiLoaded.bind(this);
    this.setMapInstance = this.setMapInstance.bind(this);

  }
  setMapInstance(map) {
    this.setState({mapInstance: map})
  }
  setMapApi(maps) {
    this.setState({mapApi: maps})
  }
  setMapApiLoaded(boolean) {
    this.setState({mapApiLoaded: boolean})
  }
  handleCenterChange () {
   if(this.state.mapApiLoaded){
     this.props.setMyPosition(this.state.mapInstance.center.lat(), this.state.mapInstance.center.lng())
   }
  }

  handleApiLoaded (map, maps) {
    // use map and maps objects
    this.setMapInstance(map)
    this.setMapApi(maps)
    this.setMapApiLoaded(true)
    console.log('載入完成!') // 印出「載入完成」
  };

  
  render(){
   return (
       <div id="map">
        <div className="content">
            <GoogleMapReact
            bootstrapURLKeys={{ key: apikey }}
            onChange={this.handleCenterChange}
            defaultCenter={this.state.center}
            defaultZoom={this.state.zoom}
            yesIWantToUseGoogleMapApiInternals // 設定為 true
            onGoogleApiLoaded={({ map, maps }) => this.handleApiLoaded(map, maps)} // 載入完成後執行
            >
              <MyPositionMarker
                  lat={this.props.myPosition_lat}
                  lng={this.props.myPosition_lng}
                  text="My Marker"
              />
            </GoogleMapReact>
        </div>
       </div>
   )
    
  } 
}


export default Map;
