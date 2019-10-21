import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';


const mapStyles = {
  width: '20%',
  height: '20%',
};

class GoogleMaps extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={8}
        style={mapStyles}
        initialCenter={{ lat: 47.444, lng: -122.176}}
      >
        <Marker position={{ lat: 48.00, lng: -122.00}} />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAdb01vl-we1KsJN1RkF5k-aHS9CuxLmmI'
})(GoogleMaps);