import { useState } from "react";

function Login() {
    
const [ username, setUsername ] = useState('')

function handleUsername(e){
    setUsername(e.target.value);

}

  return (
    <div className="login">
    <form onSubmit={e => { }}>
      <label htmlFor="login-username">Username:</label>
      <input type="text" value={username} onChange={handleUsername} name="login-username" id="login-username" />
      <label htmlFor="login-password">Password:</label>
      <input type="password" name="login-password" id="login-password" />
      <input type="submit" value="Sign In" disabled={username.length === 0} />
    </form>
    <div className="button-div"><button>Sign Up</button></div>
    <div className="button-div"><button>Sign Out</button></div>
    
    </div>
  )
}

export default Login