/* global google */
import React from 'react';
import _ from 'lodash';
import { IncreaseNortheast, IncreaseSoutheast, IncreaseNorthwest, IncreaseSouthwest } from '../actions';
import { Marker } from 'react-google-maps';
import { connect } from 'react-redux';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.store = this.props.store;
  }
    handleIncreaseNortheast = () => {
      this.store.dispatch(IncreaseNortheast());
    }
    handleIncreaseSoutheast = () => {
      this.store.dispatch(IncreaseSoutheast());
    }
    handleIncreaseNorthwest = () => {
      this.store.dispatch(IncreaseNorthwest());
    }
    handleIncreaseSouthwest = () => {
      this.store.dispatch(IncreaseSouthwest());
    }

    render() {

      let handleIncreaseNortheast = this.handleIncreaseNortheast;
      let handleIncreaseSoutheast = this.handleIncreaseSoutheast;
      let handleIncreaseNorthwest = this.handleIncreaseNorthwest;
      let handleIncreseSouthwest = this.handleIncreaseSouthwest;

      let longitude = (Math.random() * (180 - -180) + -180).toFixed(7) * 1;
      let latitude = (Math.random() * (90 - -90) + -90).toFixed(7) * 1;
      let url = "";

      return(
        <div>
        {
          _.times(10, function() {

            return(
              <Marker
                  position={{lat: latitude, lng: longitude}}
                  icon={{ url: url,
                    scaledSize: new google.maps.Size(25, 25), size: new google.maps.Size(22, 22) }}
              >
              </Marker>
            )
            }
          )

        }
        </div>
      );
    }
  }
