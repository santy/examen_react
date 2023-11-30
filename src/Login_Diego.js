import { useReducer } from "react";

// Valores iniciales
const initialFormState = {
  enteredUser: "",
  userIsValid: false,
  enteredPassword: "",
  passwordIsValid: false,
  singIn: false,
  singUp: false,
  signOut: false
}

// useReducer
const loginReducer = (state, action) => {
  if (action.type === "userInput") {
    return {
      ...state,
      enteredUser: action.value,
      userIsValid: action.value.trim().length < 10,
      
    }
  }
  if (action.type === "passwordInput") {
    return {
      ...state,
      enteredPassword: action.value,
      passwordIsValid: action.value.trim().length > 7
    }
  }

  if (action.type === "singIn") {
    return {
      ...state,
      singIn: action.value[0].trim() === "admin" && action.value[1].trim() === "admin"
    }
  }
  if (action.type === "singUp") {
    return {
      ...state,
      singUp: action.value[0].trim() === "admin" && action.value[1].trim() === "admin"
    }
  }
  if (action.type === "singOut") {
    return {
      ...state,
      signOut: action.value[0].trim() === "admin" && action.value[1].trim() === "admin"
    }
  }
}

function Login() {
    // Declaracion de variables
     const [loginState, dispatchLogin] = useReducer(loginReducer, initialFormState)
     const { enteredUser, enteredPassword, singIn, singUp, signOut } = loginState

     // Handle para los datos(usuario y contraseña)
    function handleUsername(event){
        const value = event.target.value
        dispatchLogin({type: "userInput", value})
    }

    function handlePassword(event){
        const value = event.target.value
        dispatchLogin({type: "passwordInput", value})
    }

    //Handle para los botones (signIn, singUp, signOut)
    function signInHandler(event) {
         event.preventDefault()
         const value = [enteredUser, enteredPassword]
         dispatchLogin({type: "singIn", value})

         if(singIn) {
             alert("Condiciones cumplidas")
         } else {
             alert("Condiciones no cumplidas")
         }
    }

    function singUpHandler(event) {
        event.preventDefault()
        const value = [enteredUser, enteredPassword]
        dispatchLogin({type: "signUp", value})

        if(singUp) {
            alert("Condiciones cumplidas")
        } else {
            alert("Condiciones no cumplidas")
        }
    }

    function signOutHandler(event) {
        event.preventDefault()
        const value = [enteredUser, enteredPassword]
        dispatchLogin({type: "singOut", value})

        if(signOut) {
             alert("Condiciones cumplidas")
        } else {
             alert("Condiciones no cumplidas")
        }
    }

    return (
        <div className="login">
        <form>
            <label htmlFor="login-username">Username:</label>
            <input type="text" onChange={handleUsername} name="login-username" id="login-username" />
            <label htmlFor="login-password">Password:</label>
            <input type="password" onChange={handlePassword} name="login-password" id="login-password" />
        </form>
        <form onSubmit={signInHandler}>
            <input type="submit" value="Sign In"/>
        </form>
        <form onSubmit={singUpHandler}>
            <input type="submit" value="Sign Up"/>
        </form>
        <form onSubmit={signOutHandler}>
            <input type="submit" value="Sign Out"/>
        </form>    
        </div>
    )
}

export default Login