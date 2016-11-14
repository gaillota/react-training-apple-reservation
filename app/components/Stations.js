import React, {Component} from "react";
import fetch from "isomorphic-fetch";

import {Map} from "./Map";
import {StationCard} from "./StationCard";
import {Loading} from "./Loading";

export class Stations extends Component {
    constructor(props) {
        super(props);
        
        this.handleMarkerClick = this.handleMarkerClick.bind(this);
        this.state = {
            loaded: false,
            stations: [],
            stationsSelected: []
        }
    }

    componentDidMount() {
        this._fetchStations();
    }
    
    handleMarkerClick(marker) {
        let stations = this.state.stations.filter(station => station.number == marker.key);

        this.setState({
            stationsSelected: stations
        });
    }

    render() {
        return (
            <div className="section">
                <div className="container">
                    {this.state.loaded ? (
                        <div className="columns">
                            <div className="column is-8">
                                <div className="card is-fullwidth">
                                    <header className="card-header">
                                        <p className="card-header-title">
                                            Stations map
                                        </p>
                                    </header>
                                    <div className="card-content" style={{height: `500px`}}>
                                        <Map stations={this.state.stations} handleMarkerClick={this.handleMarkerClick} />
                                    </div>
                                </div>
                            </div>
                            <div className="column is-4">
                                {this.state.stationsSelected.map(station => (
                                    <StationCard key={station.number} station={station} />
                                ))}
                            </div>
                        </div>
                    ) : (
                        <Loading />
                    )}
                </div>
            </div>
        )
    }

    _fetchStations() {
        fetch("/stations")
            .then(res => res.json())
            .then(response => {
                if (!response.success) {
                    console.log("error while fetching stations");
                    return;
                }

                this.setState({
                    loaded: true,
                    stations: response.data
                });
            });
    }
}