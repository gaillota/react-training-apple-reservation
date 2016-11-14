import React, {Component} from "react";

import {Header} from "./Header";
import {Stations} from "./Stations.js"

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <Stations />
            </div>
        );
    }
}

export default App