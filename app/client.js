import React from "react";
import {render} from "react-dom";

import App from "./components/App";

require('bulma');

render(
    <App />,
    document.getElementById('app')
);