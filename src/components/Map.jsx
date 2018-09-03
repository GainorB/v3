import React from 'react';
import { GoogleMap, withGoogleMap, withScriptjs } from 'react-google-maps';
import { compose, withProps } from 'recompose';

const Map = compose(
  withProps({
    googleMapURL:
      'https://maps.googleapis.com/maps/api/js?key=AIzaSyA8-kKN48e8WIP3e1RIF45QR3FWEHnBXuI&v=3.exp&libraries=geometry,drawing,places',
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)(props => <GoogleMap defaultZoom={8} defaultCenter={{ lat: -34.397, lng: 150.644 }} />);

export default Map;
