import './Formulario.css'
import { useCallback, useEffect, useState } from "react"
import React from 'react'

const Fomrulario = (props) => {
    //Variables del formulario
    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState("")
    const [email, setEmail] = useState("UG")
    const [programa, setPrograma] = useState("UG")
    //Variables para mensajes de error
    const [mensajeNombre, setMensajeNombre] = useState("")
    const [mensajeApellido, setMensajeApellido] = useState("")
    const [mensajeEmail, setMensajeEmail] = useState("")
    //Variable del boton
    const [botonClickable, setBotonClickable] = useState(false)


    // Se validan que los datos introducidos en nombre sean validos
    function handleValidateNombre(event) {
        let enteredNombre = event.target.value
        setNombre(enteredNombre)
        if(enteredNombre !== "" && enteredNombre.length <= 10) {
            setMensajeNombre("")
        } else if(enteredNombre.length > 10) {
            setMensajeNombre("El nombre debe ser menor de 10 caracteres")
        } else {
            setMensajeNombre("El nombre no puede estar vacio")
        }
    }

    // Se validan que los datos introducidos en apellido sean validos
    function handleValidateApellido(event) {
        let enteredApellido = event.target.value
        setApellido(enteredApellido)
        if(enteredApellido !== "" && enteredApellido.length <= 15) {
            setMensajeApellido("")
        } else if(enteredApellido.length > 15) {
            setMensajeApellido("El apellido debe ser menor de 15 caracteres")
        } else {
            setMensajeApellido("El apellido no puede estar vacio")
        }
    }

    // Se validan que los datos introducidos en email sean validos
    function handleValidateEmail(event) {
        let enteredEmail = event.target.value
        setEmail(enteredEmail)
        if(enteredEmail !== "" && enteredEmail.length <= 15 && enteredEmail.includes("@")) {
            setMensajeEmail("")
        } else if(enteredEmail.length > 15) {
            setMensajeEmail("El email debe ser menor de 15 caracteres")
        } else if(!enteredEmail.includes("@")) {
            setMensajeEmail("El email debe contener un @")
        } else {
            setMensajeEmail("El email no puede estar vacio")
        }
    }

    // No es necesario validar el programa
    function handleValidatePrograma(event) {
        setPrograma(event.target.value)
    }

    // Validaciones para saber si permitir pulsar el boton
    const handleValidateAll = useCallback(() => {
        if 
        (
            (nombre.length !== 0 && nombre.length <= 10) &&
            (apellido.length !== 0 && apellido.length <= 20) &&
            (email.length <= 20 && email.includes("@"))
        ) {
            setBotonClickable(true)
        } else {
            setBotonClickable(false)
        }
    }, [nombre, apellido, email])

    useEffect(() => {
        handleValidateAll();
      }, [handleValidateAll]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            nombre: nombre,
            apellido: apellido,
            email: email,
            programa: programa,
        };
        console.log(data)
    }

    //Formulario
    return (
        <form className='Form' onSubmit = {handleSubmit}>
            <div>
                <h1 className='Texto'>Formulario</h1>
        
                <p className='Texto'>Introduzca su nombre: </p>
                <input type="text" className='Campo' onChange={handleValidateNombre}/>
                <p className='Texto'>{mensajeNombre}</p>

                <p className='Texto'>Introduzca sus apellidos: </p>
                <input type="text" className='Campo' onChange={handleValidateApellido}/>
                <p className='Texto'>{mensajeApellido}</p>

                <p className='Texto'>Introduzca su programa: </p>
                <select className='Select' onChange={handleValidatePrograma}>
                    <option value="UG">Undergraduate</option>
                    <option value="PG">Postgraduate</option>
                </select>

                <p className='Texto'>Introduzca su email: </p>
                <input type="email" className='Campo' onChange={handleValidateEmail}/>
                <p className='Texto'>{mensajeEmail}</p>

                <br/>
                <button type="submit" disabled={!botonClickable} className={`${botonClickable ? 'BotonClickable' : 'Boton'}`}>Click to submit</button>
            </div>
        </form>
    )
}

export default Fomrulario
