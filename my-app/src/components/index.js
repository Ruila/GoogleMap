import React, { Component } from 'react';
import axios from 'axios';
import {apikey} from "../key/mapkey.js";
import GoogleMapReact from 'google-map-react';
import MyPositionMarker from './myMaker.js';
import LocationMarker from './locationMarker.js';
import Board from './board.js';
import { connect } from 'react-redux';
import '../css/style.css';

class Map extends Component  {
  constructor() {
    super();
    this.state = {
        center: {
            lat: 25.033710,
            lng: 121.564718
        },
        mapApiLoaded: false,
        mapInstance: null,
        mapApi: null,
        zoom: 15,
        places: []
    };
    this.handleApiLoaded = this.handleApiLoaded.bind(this);
    this.handleCenterChange = this.handleCenterChange.bind(this);
    this.setMapApi = this.setMapApi.bind(this);
    this.setMapApiLoaded = this.setMapApiLoaded.bind(this);
    this.setMapInstance = this.setMapInstance.bind(this);
    this.findRestaurant = this.findRestaurant.bind(this);
    this.initial = this.initial.bind(this);
  }
  componentDidMount() {
  }
  initial(){
    if(this.state.mapApiLoaded){
      if(this.state.mapInstance){
        this.findRestaurant(this.state.mapInstance.center.lat(), this.state.mapInstance.center.lng())
      }
    }
  }
  setMapInstance(map) {
    this.setState({mapInstance: map}, this.initial)
  }
  setMapApi(maps) {
    this.setState({mapApi: maps})
  }
  setMapApiLoaded(boolean) {
    this.setState({mapApiLoaded: boolean}, this.initial)
  }
  handleCenterChange () {
    // console.log('check22', this.state.mapApiLoaded)
   if(this.state.mapApiLoaded){
     this.props.setMyPosition(this.state.mapInstance.center.lat(), this.state.mapInstance.center.lng())
     this.findRestaurant(this.state.mapInstance.center.lat(), this.state.mapInstance.center.lng())
   }
  }

  handleApiLoaded (map, maps) {
    // use map and maps objects
    this.setMapInstance(map)
    this.setMapApi(maps)
    this.setMapApiLoaded(true)
    console.log('載入完成!') // 印出「載入完成」
  };

  findRestaurant (lat, lng) {
    // console.log('this.props.myPosition_lat', this.props.myPosition_lat)
    if(this.state.mapApiLoaded) {
      const service = new this.state.mapApi.places.PlacesService(this.state.mapInstance)

      const request = {
        location: {
          lat: lat,
          lng: lng
        },
        radius: 100000,
        type: ['restaurant']
      }

      service.nearbySearch(request, (results, status) => {
        if(status === this.state.mapApi.places.PlacesServiceStatus.OK) {
          console.log(results)
          this.setState({places: results})
        }
      })
    }
  }

  
  render(){
   const placesList = this.state.places.map(item=>{
     return <LocationMarker
               key={item.place_id}
               lat={item.geometry.location.lat()} 
               lng={item.geometry.location.lng()}
               placeID={item.plcae_id}
               text={item.name}/>
   })
   return (
       <div id="map">
        <div className="content">
            <GoogleMapReact
            bootstrapURLKeys={{ key: apikey, libraries:['places'] }}
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
              {placesList}
            </GoogleMapReact>
        </div>
        <Board 
          places={this.state.places}
          my_lat={this.props.myPosition_lat}
          my_lng={this.props.myPosition_lng}
          />
       </div>
   )
    
  } 
}

function mapStateToProps(state) {
  return {
   
  }
}

export default connect(mapStateToProps)(Map);
