import React,{Fragment, useState} from 'react';

const Formulario = () => {

    //Crear State para formulario
    const [ cita, actualizarCita ] = useState({
        mascota: '',
        propietario:'',
        fecha:'',
        hora:'',
        sintomas:'',
    }); 

    //funcion que se ejecuta cada que un usuario escribe en un input

    const actualizarState = e => {
        return ( 
            actualizarCita({
                ...cita,
                [e.target.name] : e.target.value
            })
         );
    }

    //extraer valores de la cita.
    const {mascota,propietario,fecha,hora,sintomas} = cita;

    //cuando el usuario presione el boton
    const submitCita = e => {
        e.preventDefault(); 
        
        // validacion del form

        //asignar una ID

        //crear la cita

        //Reiniciar el form
    }

    return ( 
        <Fragment>
            <h2>Crear Cita</h2>

            <form onSubmit={submitCita}>
                <label>Nombre Mascota</label>
                <input
                    type="text"
                    name="mascota"
                    className="u-full-width"
                    placeholder="Nombre Mascota"
                    onChange={actualizarState}
                    value={mascota}
                />
                <label>Nombre Dueño</label>
                <input
                    type="text"
                    name="propietario"
                    className="u-full-width"
                    placeholder="Nombre duseño de la mascota"
                    onChange={actualizarState}
                    value={propietario}
                />
                <label>Fecha</label>
                <input
                    type="date"
                    name="fecha"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={fecha}
                />
                <label>Hora</label>
                <input
                    type="time"
                    name="hora"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={hora}
                />
                <label>Sintomas</label>
                <textarea
                    className="u-full-width"
                    name="sintomas"
                    onChange={actualizarState}
                    value={sintomas}
                    >
                </textarea>
                <button
                    type="submit"
                    className="u-full-width button-primary">
                        Agregar Cita
                </button>
            </form>


        </Fragment>
     );
}
 
export default Formulario;