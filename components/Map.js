import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker, InfoWindow } from 'react-google-maps';

class Map extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false
    }
    this.handleToggleOpen = this.handleToggleOpen.bind(this);
    this.handleToggleClose = this.handleToggleClose.bind(this);
  }
  handleToggleOpen = (markerId, e) => {
    this.setState({
      isOpen: true
    });
  }
  handleToggleClose = (markerId) => {
    this.setState({
      isOpen: false
    });
  }
   render() {
   const GoogleMapExample = withGoogleMap(props => (
      <GoogleMap
        defaultCenter = { { lat: 0, lng: 0 } }
        defaultZoom = { 2 }
        defaultClickableIcons = { true }
        defaultOptions={{
           disableDefaultUI: true
         }}
      >
      <Marker
        title={'The marker`s title will appear as a tooltip.'}
        name={'SOMA'}
        id = { this.props.index }
        onMouseOver={ this.handleToggleOpen }
        position={{lat: 37.778519, lng: -122.405640}}
      >
      {this.state.isOpen ?
      <InfoWindow
                id = {this.props.index}
                onCloseClick={() => this.setState({isOpen: false})}>
                <div key={this.props.index}>
                  <h4>{Marker.name}</h4>
                </div>
            </InfoWindow>
      : null }
      </Marker>
      </GoogleMap>
   ));
   return(
      <div>
        <GoogleMapExample
          containerElement={ <div style={{ height: `500px`, width: '1300px' }} /> }
          mapElement={ <div style={{ height: `100%` }} /> }
        />
      </div>
   );
   }
};
export default Map;
