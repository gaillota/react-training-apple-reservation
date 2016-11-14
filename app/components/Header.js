import React, {Component} from "react";

export class Header extends Component {
    render() {
        return (
            <header className="hero is-primary">
                <div className="hero-head">
                    <div className="container">
                        <nav className="nav">
                            <div className="nav-left">
                                <a href="/" className="nav-item is-brand">
                                    <img src="/assets/logo.png" alt="Velib traffic"/>
                                </a>
                            </div>
                        </nav>
                    </div>
                </div>
                <div className="hero-body">
                    <div className="container has-text-centered">
                        <h1 className="title">
                            Velib traffic in Paris
                        </h1>
                    </div>
                </div>
            </header>
        );
    }
}