import { useReducer, useState } from "react";

const LoginReducer = (state, action) => {

  switch (action.type) {
    case 'ButtonUP':
    
        return console.log('usuario Registrado')
      

    case 'ButtonOut':
 
        return console.log('usuario deslogeado')
      
    case 'ButtonIn':
      
        return console.log('inicio completado');
      
    default:
      return state;
  }

};

function Login() {
  const [username, setUsername] = useState('')
  const [pwd, setPwd] = useState('')
  const datos={
    user:username,
    pasw:pwd
  }

  const [LoginState, dispatch] = useReducer(LoginReducer, {
    enteredUser: "",
    enteredPwd: ""
  });

  function handleUsername(e) {
    setUsername(e.target.value);

  }
  function handlePwd(e) {
    setPwd(e.target.value);

  }

  function submitHandler(e){
    e.preventDefault();
    
    dispatch({ type: 'ButtonIn' })
  }

  return (
    <div className="login">
      <form onSubmit={submitHandler}>
        <label htmlFor="login-username">Username:</label>
        <input type="text" value={username} onChange={handleUsername} name="login-username" id="login-username" />
        <label htmlFor="login-password">Password:</label>
        <input type="password" value={pwd} onChange={handlePwd} name="login-password" id="login-password" />

        <input type="submit" value="Sign In" disabled={username.length === 0} />
      </form>

      <div className="button-div"><button onClick={() => dispatch({ type: 'ButtonUP'})}>Sign Up</button></div>
      <div className="button-div"><button onClick={() => dispatch({ type: 'ButtonOut' })}>Sign Out</button></div>

    </div>
  )
}

export default Login