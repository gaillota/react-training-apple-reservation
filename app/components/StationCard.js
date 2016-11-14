import React, {Component} from "react";
import classNames from "classnames";
import moment from "moment";

export class StationCard extends Component {
    render() {
        let station = this.props.station;
        let open = station.status === "OPEN";
        let formatDate = moment(station.last_update).format('HH:mm');
        let bikeLeft = Math.round(station.available_bikes / station.bike_stands * 100);

        return (
            <div className="card is-fullwidth">
                <header className="card-header">
                    <p className="card-header-title">
                        {station.name}
                    </p>
                </header>
                <div className="card-content">
                    <div className="content">
                        <div className={classNames({
                            "notification": true,
                            "is-success": open,
                            "is-danger": !open
                        })}>
                            <span className="icon is-small">
                                <i className={classNames({
                                    "fa": true,
                                    "fa-check": open,
                                    "fa-times": !open
                                })}></i>
                            </span>
                            <span>{open ? 'Ouvert' : 'Fermé'}</span>
                        </div>
                        <div className="notification">
                            <span className="icon is-small">
                                <i className="fa fa-map-marker"></i>
                            </span>
                            <span>{station.address}</span>
                        </div>
                        <div className="columns">
                            <div className="column">
                                <div className="notification is-primary has-text-centered">
                                    <h1 className="title is-2">{station.available_bikes}</h1>
                                </div>
                            </div>
                            <div className="column">
                                <div className="notification is-danger has-text-centered">
                                    <h1 className="title is-2">{station.available_bike_stands}</h1>
                                </div>
                            </div>
                        </div>
                        <p>
                            <progress className="progress is-large is-info" value={bikeLeft} max="100">50</progress>
                        </p>
                        <div className="is-cleafix"></div>
                        <span className="is-pulled-right">
                            <small>
                                Last update: {formatDate}
                            </small>
                        </span>
                    </div>
                </div>
            </div>
        )
    }
}