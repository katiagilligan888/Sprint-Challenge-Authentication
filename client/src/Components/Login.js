import React from "react";
import axios from "axios";
import {Link} from 'react-router-dom'; 

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    };
  }

  onInputChangeHandler = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  onSubmitHandler = event => {
    event.preventDefault();
    axios
      .post("http://localhost:3300/api/login", this.state)
      .then(response => {
        this.setState({
          username: "",
          password: ""
        });
        const token = response.data.token;
        localStorage.setItem("jwt", token);
        this.props.history.push("/jokes");
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="login">
        <h1>Login</h1>
        <form onSubmit={this.onSubmitHandler} className="login-form">
          <input
            onChange={this.onInputChangeHandler}
            type="text"
            placeholder="Username"
            name="username"
            value={this.state.username}
          />
          <input
            onChange={this.onInputChangeHandler}
            type="password"
            placeholder="Password"
            name="password"
            value={this.state.password}
          />
          <button type="submit">Login</button>
          <p>Don't have an account yet? Sign up <Link to ="/register">here</Link></p>
        </form>
      </div>
    );
  }
}

export default Login;
