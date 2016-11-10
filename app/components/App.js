import React, {Component} from "react";

import {Store} from "./Store.js"

class App extends Component {

    render() {
        return (
            <div>
                <header className="section">
                    <div className="container">
                        <h1 className="title has-text-centered">
                            Apple reservation stocks
                        </h1>
                    </div>
                </header>
                <Store />
            </div>
        )
    }

}

export default App