/* global google */
import React from 'react';
import { compose, withProps } from 'recompose';
import { withScriptjs, withGoogleMap, GoogleMap } from 'react-google-maps';
import MarkerWithInfoWindow from './components/Markers';
import { createStore } from 'redux';
import myApp from './reducers';
import Legend from './components/Legend';
import './App.css';

let store = createStore(myApp);

const Map = compose(
    withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyBFipmDMgGgJcAWWnGE9q1daJeqQf3dbrM&libraries=geometry,drawing,places",
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `650px`, width: `800` }} />,
        mapElement: <div style={{ height: `100%` }} />,
    }),
    withScriptjs,
    withGoogleMap
)(props => {
  return (
    <div>
    <GoogleMap ref={(map) => this._map = map}
        defaultZoom={2}
        defaultCenter={new google.maps.LatLng(0, 0)}
        defaultOptions={{
           disableDefaultUI: true,
           draggable: false
         }}>

        <MarkerWithInfoWindow store={store} />

    </GoogleMap>

    </div>
  )
}
);

class App extends React.Component {
  render() {
  return (
    <div className="parentDiv">
    <span className="left"><Legend store={store} /></span>
    <span className="right"><Map store={store}  /></span>
    </div>
  )
}
}

export default App;
