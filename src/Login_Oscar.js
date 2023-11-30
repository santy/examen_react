import { useState, useReducer } from "react";
const initialState = {

  texto: '',    
  verificacionUsuario: false,
  verificacionPassword: false,
  singOut: false



};
const reducer = (state, action) =>{
  switch(action.type){
    case "setTexto":
            return {...state, texto: action.payload};
    case "setVerificacionUsuario":
        return {...state, verificacionUsuario: !state.verificacionUsuario};
    case "setVerificacionPassword":
        return {...state, verificacionPassword: !state.verificacionPassword}
    case "setSingOut":
      return {...state, singOut: !state.singOut}
    default:
      return state;
  }
}
function Login() {
    

const [state, dispatch] = useReducer(reducer, initialState);
const isValid = state.verificacionPassword && state.verificacionUsuario;
let signInOk = false;


  function verificarPassword(event){
    dispatch({type: "setTexto", payload:event.target.value})
    if(state.texto.length > 0){
      dispatch({type: "setVerificacionPassword"})
    }
  }
  function verificarUsuario(event){
    dispatch({type: "setTexto", payload:event.target.value})
    if(state.texto.length > 0){
      dispatch({type: "setVerificacionUsuario"})
    }
  }


function submitFormHandler(event){
  event.preventDefault();
  if (!isValid) {
    return alert('Invalid form inputs!');
    
  }else{
    signInOk = true;
    return alert('Correct LogIn!');
  }
}

function signUp(event){
  event.preventDefault();
  if (!isValid) {
    return alert('Invalid form inputs!');
    
  }else{
  
    return alert('correct SingUp!');
  }
}

  function signOut(){
    if(!signInOk){
      return alert('Ninguna sesion iniciada');
  
    }else{
      return alert('Sesion cerrada correctamente!');
    }
  }



  return (
    <div className="login" >
    <form onSubmit={submitFormHandler}>
      <label htmlFor="login-username">Username:</label>
      <input type="text" onChange={verificarUsuario} name="login-username" id="login-username" />
      <label htmlFor="login-password">Password:</label>
      <input type="password" onChange={verificarPassword} name="login-password" id="login-password" />
      <input type="submit" value="Sign In"  />
    </form>
    <div className="button-div"><button onClick={signUp}>Sign Up</button></div>
    <div className="button-div"><button onClick={signOut}>Sign Out</button></div>
    
    </div>
  )
}

export default Login