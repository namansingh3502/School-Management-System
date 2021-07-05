import { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

export default class Login extends Component{
  constructor(props) {
    super(props);
    this.state = {
      username:"",
      password:"",
      redirectToReferrer: false
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUsername = this.handleUsername.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
  }

  handleUsername(event) {this.setState({username: event.target.value});}
  handlePassword(event) {this.setState({password: event.target.value});}

  handleSubmit(event) {
    const { username, password } = this.state;
    axios
      .post(
        `http://localhost:8000/auth/token/login/`,
        {
          username: username,
          password: password,
        },
      )
      .then(response => {
        if (response.status === 200) {
          localStorage.setItem("Token", "Token " + response.data.auth_token)
          this.setState({redirectToReferrer: true});
        }
      })
      .catch(error => console.log("login error : ", error));

    event.preventDefault();
  }

  render() {
    const { redirectToReferrer } = this.state;

    if( redirectToReferrer === true ){
       return <Redirect to={"/dashboard"}/>
    }

    return(
      <div className="container min-w-full h-screen flex justify-center items-center">
        <div className="w-1/3">
          <form
            className="border-blue-300	p-8 border-t-12 bg-white mb-6 rounded-lg shadow-lg"
            onSubmit={this.handleSubmit}
          >
            <h1 className="font-hairline mb-6 text-center font-bold text-5xl">Login Page</h1>

            <label
              htmlFor="username"
              className="font-bold block text-gray-800 text-xl "
            >Username

            <input
              value={this.state.username}
              type="text"
              id="location"
              placeholder="Your Username"
              onChange={this.handleUsername}
              className="block appearance-none w-full bg-white border border-grey-light hover:border-grey px-2 my-2 rounded shadow"
              required
            />
            </label>

            <label
              htmlFor="password"
              className="font-bold text-grey-darker block text-xl mb-2"
            >Password

            <input
              value={this.state.password}
              id="password"
              type="password"
              placeholder="Your Password"
              onChange={this.handlePassword}
              className="block appearance-none w-full bg-white border border-grey-light hover:border-grey px-2 my-2 rounded shadow"
              required
            />
            </label>

            <div className="flex items-center justify-between text-xl mt-8">

              <button
                type="submit"
                className="bg-green-500 hover:bg-teal text-white font-bold py-2 px-4 rounded"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}