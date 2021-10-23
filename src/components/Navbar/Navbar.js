import React, { Component } from 'react';
import { MenuItems } from "./MenuItems"
import { Link } from "react-router-dom";
import './Navbar.css';
class Navbar extends Component {
    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }
    render() {
        return (
            <nav className="NavbarItems">
                <h1 className="navbar-logo">Name</h1>
                <div className="menu-icon" onClick={this.handleClick}>

                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((items, index) => {
                        return (
                            <li key={index}>
                                <Link to={items.url}>{items.title}</Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        )
    }
}

export default Navbar;