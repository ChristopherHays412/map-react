/* global google */
import React from 'react';
import _ from 'lodash';
import { IncreaseNortheast, IncreaseSoutheast, IncreaseNorthwest, IncreaseSouthwest } from '../actions';
import { Marker } from 'react-google-maps';
import '../App.css';

export default class MarkerWithInfoWindow extends React.Component {

    constructor (props) {
      super(props)
      this.state = {
        visible: 1
      }
      this.store = this.props.store;
    }
    render() {

        return (
          <div><CoordinatesFunction store={this.store} /></div>
        )
    }
}
const CoordinatesFunction = (props) => {
  let RunCoordinates = _.times(10, function() {
    let longitude = (Math.random() * (170 - -170) + -170).toFixed(7) * 1;
    let latitude = (Math.random() * (80 - -80) + -80).toFixed(7) * 1;
    let url = "";
    let nwRef = React.createRef();
        if (latitude >=0 && latitude <= 90 && longitude >= -180 && longitude <= 0) {
            url="https://maps.google.com/mapfiles/ms/icons/blue.png";
            {props.store.dispatch(IncreaseNorthwest());}

          } else if ( latitude <=0 && latitude >= -90 && longitude >= -180 && longitude <= 0 ) {
            url="https://maps.google.com/mapfiles/ms/icons/yellow.png";
            {props.store.dispatch(IncreaseSouthwest());}

          } else if ( latitude >=0 && latitude <= 90 && longitude >= 0 && longitude <= 180 ) {
            url="https://maps.google.com/mapfiles/ms/icons/green.png";
            {props.store.dispatch(IncreaseNortheast());}

          } else if ( latitude <=0 && latitude >= -90 && longitude >= 0 && longitude <= 180 ) {
            url="https://maps.google.com/mapfiles/ms/icons/red.png";
            {props.store.dispatch(IncreaseSoutheast());}
          }
    return <div key={Math.random()} ref={nwRef} style={{ display: 'none' }}>
      <Marker
          position={{lat: latitude, lng: longitude}}
          icon={{ url: url,
        scaledSize: new google.maps.Size(22, 22), size: new google.maps.Size(22, 22) }}
        map={{this.state.map}}
      >
      </Marker>
    </div>
  })
  return(<div>{RunCoordinates}</div>)
}
