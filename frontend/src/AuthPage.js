import { Component } from "react";


class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      status: "loading",
      username: "",
      password: "",
      validated: true,
    };

    this.handleUsername = this.handleUsername.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.authenticate = this.authenticate.bind(this);
  }

  handleUsername(event) {this.setState({username: event.target.value});}
  handlePassword(event) {this.setState({password: event.target.value});}

  async authenticate(){
    let {from} = this.props.location.state || {from: {pathname: '/home'}}

    const res = await fetch(`http://localhost:8000/auth/token/login/`,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password
      }),
    });
    const json = await res.json();
    if( res.ok ) {
      console.log("json : ", json["auth_token"]);
      localStorage.setItem("Token", "Token " + json["auth_token"]);
      this.setState({validated: true});
      this.props.history.push(from)
    }
    else{
      console.log("res : ", res);
    }
  }

  render() {

    return (
      <div className="container min-w-full h-screen flex justify-center items-center">

        <div className="w-1/3">

          <form
            className="border-blue-300	p-8 border-t-12 bg-white mb-6 rounded-lg shadow-lg"
            onSubmit={(e) => {
              e.preventDefault();
              this.authenticate();
            }}
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
              />
            </label>

            <div className="flex items-center justify-between text-xl mt-8">

              <button className="bg-green-500 hover:bg-teal text-white font-bold py-2 px-4 rounded">
                Login
              </button>

            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
