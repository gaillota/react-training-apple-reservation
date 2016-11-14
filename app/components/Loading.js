import React, {Component} from "react";

export class Loading extends Component {
    render() {
        return (
            <div className="has-text-centered">
                <span className="icon is-large">
                    <i className="fa fa-cog fa-fw fa-spin"></i>
                </span>
                <span>
                    Loading...
                </span>
            </div>
        )
    }
}