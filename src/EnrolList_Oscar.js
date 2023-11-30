import { useState, useEffect, useCallback } from "react";
import "./EnrolList.css";
import { DetailsList } from "@fluentui/react/lib/DetailsList";


//Columns for the detail list.
const columns = [
  {
    key: "fname",
    name: "First Name",
    fieldName: "fname",
    minWidth: 90,
    maxWidth: 200,
    isResizable: true,
  },
  {
    key: "lname",
    name: "Last Name",
    fieldName: "lname",
    minWidth: 90,
    maxWidth: 200,
    isResizable: true,
  },
  {
    key: "program",
    name: "Program",
    fieldName: "program",
    minWidth: 60,
    maxWidth: 200,
    isResizable: true,
  },
  {
    key: "email",
    name: "Email",
    fieldName: "email",
    minWidth: 130,
    maxWidth: 200,
    isResizable: true,
  },
];

// Change items by elements introduces in other component
const  items = [];
for (let i = 1; i < 5; i++) {
  items.push({
    key: i,
    fname: "FirstName " + i,
    lname: "LastName " + i,
    program: "UG",
    email: "Email " + i,
  });
}



const EnrolList = () => {
  const [nombre, setNombre] = useState("");
  const [lastName, setLastName] = useState("");
  const [program, setProgram] = useState("");
  const [email, setEmail] = useState("");
  const [errores, setErrores] = useState({ nombre: "", lastName: "", email: "" });
  const [formValido, setFormValido] = useState(false);

  const [nombreOk, setNombreOk] = useState(false);
  const [lastNameOk, setLastNameOk] = useState(false);
  const [emailOk, setEmailOk] = useState(false);
  var usuario = [{nombre: "", apellido:"", email: "", programa: ""}]
  const [listaUsuarios, setListaUsuarios] = useState([]);

  
  const validarFormulario = useCallback(() => { 
    let errores = {};
    let formValido = false;
   
    // Validación del nombre
    if (nombre.length <=10  && nombre.length > 0) {
      setNombreOk(true)
      
    }else{
      setNombreOk(false)
        errores.nombre = "El nombre no puede superar los 10 carácteres ni estar vacío";
    }
    // Validación del apelidos
    if (lastName.length <=15  && lastName.length > 0) {
      setLastNameOk(true)
      
    }else{
      setLastNameOk(false)
        errores.lastName = "El apellido no puede superar los 15 carácteres ni estarvacío";
    }

    // Validación del email
    if (email.length <=15  && email.length > 0) {
      setEmailOk(true)
      
    }else{
      setEmailOk(false)
        errores.email = "El email no puede superar los 15 carácteres, ni estar vacío.";
    }
    //Validacion de los terminos
    
      
    
    if(nombreOk && lastNameOk && emailOk){
        formValido = true;
        setFormValido(formValido);
        usuario = [{nombre: nombre, apellido: lastName, email: email, programa: program}]
        setListaUsuarios([...usuario])
       
    }else{
      formValido = false;
      setFormValido(formValido);
    }
    
    setErrores(errores);
    
  },[nombre, lastName, email, nombreOk, lastNameOk, emailOk, program])


  function handleSubmit(e){
    e.preventDefault();
    if(formValido){
      
      
      console.log(listaUsuarios)
      setNombreOk(false)
      setLastNameOk(false)
      setEmailOk(false)
      setLastName("")
      setNombre("")
      setEmail("")
      setFormValido(false)
      
      
      return alert('Datos enviados correctamente');
      
    }
    
  };

  function escribirDatos(){
    if(formValido){
      const columns = [
        {
          key: nombre,
          name: "First Name",
          fieldName: nombre,
          minWidth: 90,
          maxWidth: 200,
          isResizable: true,
        },
        {
          key: lastName,
          name: "Last Name",
          fieldName: lastName,
          minWidth: 90,
          maxWidth: 200,
          isResizable: true,
        },
        {
          key: program,
          name: "Program",
          fieldName: program,
          minWidth: 60,
          maxWidth: 200,
          isResizable: true,
        },
        {
          key: email,
          name: "Email",
          fieldName: email,
          minWidth: 130,
          maxWidth: 200,
          isResizable: true,
        },
      ];
      for (let i = 1; i < listaUsuarios.length; i++) {
        listaUsuarios.push({
          key: i,
          fname: nombre ,
          lname: lastName ,
          program: program,
          email: email,
        });
      }
    }
  }

  useEffect(() => {
    validarFormulario()
  }, [validarFormulario]);

  return (
    <div>
    <form onSubmit={handleSubmit} className="formulario">
    <div>
    <h3>Rellene el formulario</h3>
      <p>Nombre: <input type="text" onChange={(e) => setNombre(e.target.value)}  value = {nombre}/></p>
      <p className="texto-rojo">{errores.nombre}</p>
      <p>Apellidos: <input type="text" onChange={(e) => setLastName(e.target.value)}  value = {lastName}/></p>
      <p className="texto-rojo">{errores.lastName}</p>
      <p>Email: <input type="text" onChange={(e) => setEmail(e.target.value)}  value = {email}/></p>
      <p className="texto-rojo">{errores.email}</p>
      <p>Program: <select value={program} onChange={(e) => setProgram(e.target.value)}>
          <option value="UG">UG</option>
          <option value="PG">PG</option>                            
      </select></p>
    </div>

    <button onClick={escribirDatos} className={formValido ? "boton-verde" : "boton-rojo"}type="submit">Enviar</button>
  </form>
    <div className="enrolList">
      <DetailsList items={listaUsuarios} columns={columns} />
    </div>
    </div>
  );
};
export default EnrolList;