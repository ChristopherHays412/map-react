/* global google */
import React from 'react';
import { compose, withProps } from 'recompose';
import { withScriptjs, withGoogleMap, GoogleMap } from 'react-google-maps';
import MarkerWithInfoWindow from './Sandbox';
import { createStore } from 'redux';
import myApp from '../reducers';

let store = createStore(myApp);

const MapWithMarkers = compose(
    withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyBFipmDMgGgJcAWWnGE9q1daJeqQf3dbrM&libraries=geometry,drawing,places",
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `650px`, width: `700` }} />,
        mapElement: <div style={{ height: `100%` }} />,
    }),
    withScriptjs,
    withGoogleMap
)(props => {
  console.log(props);
  return (
    <GoogleMap
        defaultZoom={2}
        defaultCenter={new google.maps.LatLng(0, 0)}
        defaultOptions={{
           disableDefaultUI: true,
           draggable: false
         }}>

        <MarkerWithInfoWindow store={myApp} />

    </GoogleMap>
  )
}
);

export default MapWithMarkers;
