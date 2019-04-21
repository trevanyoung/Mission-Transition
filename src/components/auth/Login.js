import React, { Component } from "react"
import { Jumbotron, Button } from 'reactstrap';
import "./login.css"
import UserManager from "../../modules/UserManager"

export default class Login extends Component {
  // Set initial state
  state = {
    password: "",
    username: ""
  }

  // Update state whenever an input field is edited
  handleFieldChange = evt => {
    const stateToChange = {}
    stateToChange[evt.target.id] = evt.target.value
    this.setState(stateToChange)
  }

  handleRegister = e => {
    e.preventDefault()
    const newUser = {
      username: this.state.username,
      password: this.state.password
    }
    if (this.state.username && this.state.password) {
      UserManager.searchUsername(this.state.username).then(users => {
        if (users.length) {
          alert(`Username ${this.state.username} already exits!`)
        } else {
          UserManager.addUser(newUser).then(user => {
            sessionStorage.setItem("credentials", parseInt(user.id))
            this.props.setAuth()
          })
        }
      })
    } else {
      alert("Please Fill Out Form 😬!")
    }
  }

  handleLogin = e => {
    e.preventDefault()
    if (this.state.username && this.state.password) {
      UserManager.searchUP(this.state.username, this.state.password).then(
        user => {
          if (!user.length) {
            alert("Wrong username or password!")
          } else {
            sessionStorage.setItem("credentials", parseInt(user[0].id))
            this.props.setAuth()
          }
        }
      )
    } else {
      alert("Please Fill Out Form 😬!")
    }
  }

  render() {
    return (
      // <form className="loginForm">
      //   <h1 className="h3 mb-3 font-weight-normal">Mission Transition...</h1>
      //   <label htmlFor="inputUsername">Username</label>
      //   <input
      //     onChange={this.handleFieldChange}
      //     type="username"
      //     id="username"
      //     placeholder={` Something Cool`}
      //     required=""
      //     autoFocus=""
      //   />
      //   <label htmlFor="inputPassword">Password</label>
      //   <input
      //     onChange={this.handleFieldChange}
      //     type="password"
      //     id="password"
      //     placeholder={` Don't tell!`}
      //     required=""
      //   />
      //   <button type="submit" onClick={this.handleLogin}>
      //     Sign in
      //   </button>
      //   <button type="submit" onClick={this.handleRegister}>
      //     Register
      //   </button>
      // </form>

      <div>
      <Jumbotron>
        <h1 className="display-3">Mission Transition</h1>
        <p className="login">Your journey to your next duty station</p>
        <hr className="my-2" />
        <p className="loginInstruction">Login or Register if you have just received your DD214...</p>
        <p className="lead">
          <div className="loginRegisterForm">
            <div className="loginFormFields">
            <div className="loginRegisterUsername">
              <label htmlFor="inputUsername">Username</label>
              <input
                onChange={this.handleFieldChange}
                type="username"
                id="username"
                placeholder={`please type username...`}
                required=""
                autoFocus=""
                className="loginFields"
              />
            </div>
          <div className="loginRegisterPassword">
            <label htmlFor="inputPassword">Password</label>
              <input
              onChange={this.handleFieldChange}
              type="password"
              id="password"
              placeholder={`please type password...`}
              required=""
              className="loginFields"
            />
            </div>
          </div>
          <div className="loginButtons">
            <div className="loginButton">
            <Button
              type="submit"
              onClick={this.handleLogin}>
              Sign in
            </Button>
          </div>
          <div className="registerButton">
            <Button
              type="submit"
              onClick={this.handleRegister}>
              Register
            </Button>
            </div>
          </div>
         </div>
        </p>
      </Jumbotron>
    </div>
    )
  }
}
