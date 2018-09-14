import React from "react";
import axios from "axios";

class Register extends React.Component {
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
      .post("http://localhost:3300/api/register", this.state)
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
      <div className="register">
        <form onSubmit={this.onSubmitHandler} className="sign-up-form">
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
          <button type="submit">Sign up!</button>
        </form>
      </div>
    );
  }
}

export default Register;
