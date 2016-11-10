import React, {Component} from "react";
import $ from "jquery";

export class Store extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
            stores: []
        }
    }

    componentDidMount() {
        this._fetchStores();
    }

    render() {
        return (
            <div className="section">
                <div className="container">
                    <h1 className="title">Stores</h1>
                </div>
            </div>
        )
    }

    _fetchStores() {
        $.getJSON("/stores", (result) => {
            if (!result.success) {
                console.log("Error while fetching stores");
                return;
            }

            console.log(res.data);

            this.setState({
                loaded: true,
                stores: res.data
            });
        });
    }
}