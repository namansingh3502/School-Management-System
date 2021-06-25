const Login = () => {
  return(
    <div className="container mx-auto h-screen flex justify-center items-center" >
      <div className="w-1/3">
        <div className="border-blue-300	 p-4 border-t-12 bg-white mb-6 rounded-lg shadow-lg">
          <h1 className="font-hairline mb-6 text-center text-4xl">Login Page</h1>

          <div className="mb-8">
            <label className="font-bold block text-gray-800 mb-2" >Username</label>
            <input type="text" className="block appearance-none w-full bg-white border border-grey-light hover:border-grey px-2 py-2 rounded shadow" placeholder="Your Username"/>
          </div>
          <div className="mb-8">
            <label className="font-bold text-grey-darker block mb-2">Password</label>
            <input type="text" className="block appearance-none w-full bg-white border border-grey-light hover:border-grey px-2 py-2 rounded shadow" placeholder="Your Password"/>
          </div>
          <div className="flex items-center justify-between mt-8" >
            <button className="bg-green-500 hover:bg-teal text-white font-bold py-2 px-4 rounded">
              Login
            </button>
          </div>
        </div>
      </div>
    </div>




  );
};

export default Login;
