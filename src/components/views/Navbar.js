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
                </div>


                <div id="navbarBasicExample" className="navbar-menu is-desktop">
                    <div className="navbar-end">
                        <div className="navbar-item">
                            <div className="buttons">
                                <Link to="/create" className="button navbar-item salvation-red">
                                    <strong>Create</strong>
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