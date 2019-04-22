import React from 'react';

export default class HeaderNav extends React.Component {

    render() {
        return (
            <header className="Header">
                <a className="Header-logo" href="/" aria-current="page">
                    <span className="Header-logo-icon"/>
                    <h1 className="Header-logo-wordmark">Ronjiru</h1>
                </a>
                <nav className="Header-navigation">
                    <ul className="Header-navigation-items">
                        <li className="Header-navigation-item">
                            <a className="nav-link" href="/generate">Generate</a>
                        </li>
                        <li className="Header-navigation-item">
                            <a className="nav-link" href="/profile">Profile</a>
                        </li>
                    </ul>
                </nav>
            </header>
        );
    }
}