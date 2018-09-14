import React from "react";
import axios from "axios";

class JokesPage extends React.Component {
  constructor() {
    super();
    this.state = {
      jokes: []
    };
  }

  componentDidMount = () => {
    const token = localStorage.getItem("jwt");
    const requestOptions = {
      headers: {
        Authorization: token
      }
    };
    axios
      .get("http://localhost:3300/api/jokes", requestOptions)
      .then(response => {
        this.setState({
          jokes: response.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  signOutHandler = () => {
    localStorage.removeItem("jwt");
    this.props.history.push("/");
  };

  render() {
    return (
      <div className="jokes">
        {this.state.jokes.map(joke => {
          return (
            <li>
              {joke.setup} {joke.punchline}
            </li>
          );
        })}
        <button onClick={this.signOutHandler}>Signout</button>
      </div>
    );
  }
}

export default JokesPage;
