import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {

    render() {
        return (
            <nav className="navbar has-shadow" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <Link to="/"  >
                        <img src="/imgs/logo.png" alt="Giving Hope Today" height="90" />
                    </Link>

                    <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>

                <div id="navbarBasicExample" className="navbar-menu">
                    <div className="navbar-end">
                        <div className="navbar-item">
                            <div className="buttons">
                                <Link to="/create" className="button navbar-item salvation-red">
                                    <strong>Create Profile</strong>
                                </Link>
                                <Link to="/donate" className="button navbar-item salvation-red">
                                    <strong>Donate</strong>
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>
            </nav>
        )
    }
};

export default Navbar;