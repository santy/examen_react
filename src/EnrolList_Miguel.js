import "./EnrolList.css";
import { DetailsList } from "@fluentui/react/lib/DetailsList";
import { useState, useCallback, useEffect } from "react";

// Columns for the detail list.
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

let Nombre=""
let Apellido=""
let Programa=""
let EmailItem=""
// Change items by elements introduces in other component
const items = [];

for (let i = 1; i < 5; i++) {
  items.push({
    key: i,
    fname: Nombre,
    lname: Apellido,
    program: Programa,
    Email: EmailItem,
  });
}

// const EnrolList = () => {

//   return (
//     <div className="enrolList">
//       <DetailsList items={items} columns={columns} />
//     </div>
//   );
// };

const EnrolList = () => {


  const [NomUser, setNomUser] = useState("");
  const [ApeUser, setApeUser] = useState("");
  const [Email, setEmail] = useState("");
  const [Program, setProgram] = useState("Masculino");

  const [MensajeError, setMensajeError] = useState("");
  const [MensajeError2, setMensajeError2] = useState("");
  const [MensajeError3, setMensajeError3] = useState("");

  const [ButtonActivado, setButtonActivado] = useState(true);


  const validar = useCallback(
    function () {
      if (NomUser.length <= 10 && NomUser.length !== 0) {
        setMensajeError("");

      } else {
        setMensajeError("El máximo de caracteres para el Nombre son 10 y tiene que tener texto");

      }
      if (ApeUser.length <= 20 && ApeUser.length !==0) {
        setMensajeError2("");
      } else {
        setMensajeError2("El máximo de caracteres para el Apellido son 15  y tiene que tener texto");
      }
      if (Email.length <= 20 && Email.includes("@")&& Email.length !==0) {
        setMensajeError3("");
      } else {
        setMensajeError3("El máximo de caracteres para el email son 15, no puede estar vacio y tiene que incluir @");
      }

      if (
        (NomUser.length !== 0 && NomUser.length <= 10) &&
        (ApeUser.length !== 0 && ApeUser.length <= 15) &&
        (Email.length <= 15 && Email.includes("@")&& Email.length !==0) &&
        (Program !== "")
      ) {
        setButtonActivado(false)
      } else {
        setButtonActivado(true)
      }
    },
    [NomUser, ApeUser, Email, Program, ButtonActivado]
  )
  useEffect(
    function () {
      validar();
      console.log(NomUser.length)
    },
    [validar]
  )

  const handleInputChangeName = (e) => {
    setNomUser(e.target.value)
  };

  const handleInputChangeApe = (e) => {
    setApeUser(e.target.value);
  };

  const handleInputChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleInputChangeProgram = (e) => {
    setProgram(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    items.push({
      fname: NomUser,
      lname: ApeUser,
      program: Program,
      Email: Email,
    });

  
    console.log()
    alert("Usuario creado")

  }

  return (

    <form onSubmit={handleSubmit}>
      <h1>FORMULARIO</h1>
      <div >
        <label for="name">Introduce el nombre de usuario: </label>
        <br />
        <input type="text" value={NomUser} id="name" onChange={handleInputChangeName} />
        <p>{MensajeError}</p>
      </div>


      <div >
        <label for="email">Introduce el apellido de usuario: </label>
        <br />
        <input type="text" value={ApeUser} id="email" onChange={handleInputChangeApe} />
        <p>{MensajeError2}</p>
      </div>

      <div>
        <label for="program">Introduce el Program de usuario: </label>
        <select name="program" value={Program} id="program" onChange={handleInputChangeProgram}>
          <option value="UG">Undergraduate</option>
          <option value="UP">PostGraduate</option>
        </select>
      </div>

      <div >
        <label for="email">Introduce el email de usuario: </label>
        <br />
        <input type="email" value={Email} id="email" onChange={handleInputChangeEmail} />
        <p>{MensajeError3}</p>
      </div>

      <div >
        <button type="submit" disabled={ButtonActivado} onClick={handleSubmit}>Enviar</button>

      </div>

      <div className="enrolList">
      <DetailsList items={items} columns={columns} />
    </div>
    </form>
  )
}

export default EnrolList;