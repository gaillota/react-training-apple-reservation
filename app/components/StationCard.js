import React, {Component} from "react";

export class StationCard extends Component {
    render() {
        let station = this.props.station;
        
        return (
            <div className="card is-fullwidth">
                <header className="card-header">
                    <p className="card-header-title">
                        {station.name}
                    </p>
                </header>
                <div className="card-content">
                    <p>Address: {station.address}</p>
                    <p>Available bike: {station.available_bikes} / {station.bike_stands}</p>
                </div>
            </div>
        )
    }
}