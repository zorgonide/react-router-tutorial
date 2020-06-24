import React, { Component } from 'react'
import "../App.css"
import { Link } from "react-router-dom";

export class Nav extends Component {
    
    render() {
        return (
            <div className="nav">
                <h3>LOGO</h3>
                <ul className="nav-links">
                    <Link style = {navStyle} to="about">
                      <li>About</li>
                    </Link>
                    <Link style = {navStyle} to="shop">
                      <li>Shop</li>
                    </Link>
                </ul>
            </div>
        )
    }
}
const navStyle = {
    color: "white",
    
}
export default Nav
