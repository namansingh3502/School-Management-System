import {useState} from "react";

export default function Login(){
  const [username, updateUsername] = useState("");
  const [password, updatePassword] = useState("");

  function requestLogin() {
    const data = {
     username: String(username),
     password: String(password),
    }

    fetch(`http://localhost:8000/auth/token/login/`,{
     method: 'POST',
     headers: {
       'Content-Type': 'application/json',
     },
     body: JSON.stringify(data),
     })
     .then(response =>{
       if( !response.ok ){
          console.log( "status", response.status);
          console.log( "body", response.body );
       }
       else{
         return response.json();
       }
     })
     .then( data => {
       const token = "Token " + data["auth_token"];
       localStorage.setItem('auth_token', token);
       window.location = "http://127.0.0.1:1234/home/";
     });
  }

  return(
    <div className="container min-w-full h-screen flex justify-center items-center" >

      <div className="w-1/3" >

        <form
          className="border-blue-300	p-8 border-t-12 bg-white mb-6 rounded-lg shadow-lg"
          onSubmit={(e) => {
            e.preventDefault();
            requestLogin();
          }}
          >
          <h1 className="font-hairline mb-6 text-center font-bold text-5xl">Login Page</h1>

          <label
            htmlFor="username"
            className="font-bold block text-gray-800 text-xl "
          >Username

          <input
            value={username}
            type="text"
            id="location"
            placeholder="Your Username"
            onChange={e => updateUsername(e.target.value)}
            className="block appearance-none w-full bg-white border border-grey-light hover:border-grey px-2 my-2 rounded shadow"
          />
          </label>

          <label
            htmlFor="password"
            className="font-bold text-grey-darker block text-xl mb-2"
          >Password

          <input
            value={password}
            id="password"
            type="password"
            placeholder="Your Password"
            onChange={e => updatePassword(e.target.value)}
            className="block appearance-none w-full bg-white border border-grey-light hover:border-grey px-2 my-2 rounded shadow"
          />
          </label>

          <div className="flex items-center justify-between text-xl mt-8" >

          <button className="bg-green-500 hover:bg-teal text-white font-bold py-2 px-4 rounded">
            Login
          </button>

          </div>
        </form>
      </div>
    </div>
  );
};
