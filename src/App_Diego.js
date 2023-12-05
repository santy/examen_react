import { useState } from 'react';
import './App.css';
import EnrolList from './EnrolList';
import Formulario from './Form/Formulario';

//Se crea un usuario inicial para comprobar si al menos se muestra
const initialUser = [ 
    { id: 1, fname: "Diego",  lname: "Lacasa", program: "UG", email: "Diego@gmail"}
]

function App() {
    //Declaracion de variables
    const [users, setUsers] = useState(initialUser)
    const [value, setValue] = useState("")

    //Funciones que no funcionan
    function handleAddUser(event) {
        setValue(event.target.value)
    }

    let contador = users.length

    function AddList() {
        if (value.trim() === "") {
          return;
        }

        const newUser = { id: contador, name:value }
        setUsers([...users, newUser])
        setValue("")
    }

    //Faltan los props
    return (
        <div className='App'>
            <Formulario ChangeInput={handleAddUser} Value={value} ClickButton={AddList}/>
            <hr/>
            <EnrolList Users={users}/>
        </div>
    );
}

export default App;

