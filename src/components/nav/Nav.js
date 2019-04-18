import React, { Component } from "react"
import { Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"

import "./nav.css"
class Nav extends Component {
  logout = () => {
    sessionStorage.clear("credentials")
    this.props.setAuth()
  }

  render() {
    return (
      <nav className="navbar navbar-light fixed-top light-blue flex-md-nowrap p-0 shadow">
        <ul className="nav nav-pills">
          <li className="nav-item">
            <Link className="nav-link" to="/">Mission Transition</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/dashboard">Dashboard</Link>
          </li>
          {/* <li className="nav-item">
            <Link className="nav-link" to="/chats">Chat Room</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/friendslist">Friends List</Link>
          </li> */}
          <li className="nav-item">
            <Link className="nav-link" to="/gibill">Gi Bill Information</Link>
          </li>
        </ul>
        <a className="nav-link">"Breaking it down Barney-style" for {this.props.activeUser.username}</a>
        <button
          type="button"
          className="btn btn-outline-info"
          onClick={this.logout}>
          Logout
        </button>
      </nav>
    )
  }
}

export default Nav
