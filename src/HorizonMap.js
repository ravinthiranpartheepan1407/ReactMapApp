import React, { Component } from 'react';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';

export class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {

      address: '',

      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},

      mapCenter: {
        lat: 54.8985,
        lng: 23.9036
      }
    };
  }

  handleChange = address => {
    this.setState({ address });
  };

  handleSelect = address => {
    this.setState({ address });
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => {
        console.log('Success', latLng);


        this.setState({ mapCenter: latLng });
      })
      .catch(error => console.error('Error', error));
  };

  render() {
    return (
      <div id='googleMaps'>
        <PlacesAutocomplete
          value={this.state.address}
          onChange={this.handleChange}
          onSelect={this.handleSelect}
        >
          {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
            <div>
              <input
                {...getInputProps({
                  placeholder: 'Search Places ...',
                  className: 'appearance-none bg-transparent border-none bg-white w-full text-center mr-3 py-1 px-2 leading-tight focus:outline-none',
                })}
              />
              <div class="autocomplete-dropdown-container text-black">
                {loading && <div class="bg-white text-black">Loading...</div>}
                {suggestions.map(suggestion => {
                  const className = suggestion.active
                    ? 'suggestion-item--active'
                    : 'suggestion-item';

                  const style = suggestion.active
                    ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                    : { backgroundColor: '#ffffff', cursor: 'pointer' };
                  return (
                    <div
                      {...getSuggestionItemProps(suggestion, {
                        className,
                        style,
                      })}
                    >
                      <span>{suggestion.description}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </PlacesAutocomplete>

        <Map className="maps"
          google={this.props.google}
          initialCenter={{
            lat: this.state.mapCenter.lat,
            lng: this.state.mapCenter.lng
          }}
          center={{
            lat: this.state.mapCenter.lat,
            lng: this.state.mapCenter.lng
          }}
        >
          <Marker
            position={{
              lat: this.state.mapCenter.lat,
              lng: this.state.mapCenter.lng
            }} />
        </Map>
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyCkZvHYAh-G64aHLCi3ry--wgZk4apHLB0')
})(MapContainer)
