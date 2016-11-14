import React, {Component} from "react";
import {withGoogleMap, GoogleMap, Marker} from "react-google-maps";

const GoogleMapWrapper = withGoogleMap(props => (
    <GoogleMap ref={props.onMapLoad} defaultZoom={11} defaultCenter={{ lat: 48.859512, lng: 2.347278 }}>
        {props.markers.map(marker => (
            <Marker {...marker} onClick={() => props.onMarkerClick(marker)} />
        ))}
    </GoogleMap>
));

export class Map extends Component {
    constructor(props) {
        super(props);

        this.handleMapLoad = this.handleMapLoad.bind(this);
    }

    handleMapLoad(map) {
        this._mapComponent = map;
        if (map) {
            console.log(map.getZoom());
        }
    }

    render() {
        let markers = this.props.stations.map(station => ({
            position: station.position,
            key: station.number,
            defaultAnimation: 2
        }));

        return (
            <div style={{height: `100%`}}>
                <GoogleMapWrapper
                    containerElement={
                        <div style={{ height: `100%` }} />
                    }
                    mapElement={
                        <div style={{ height: `100%` }} />
                    }
                    onMapLoad={this.handleMapLoad}
                    markers={markers}
                    onMarkerClick={this.props.handleMarkerClick}
                />
            </div>
        );
    }
}
