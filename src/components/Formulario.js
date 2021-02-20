import React,{Fragment, useState} from 'react';
import uuid from 'uuid/dist/v4';
import PropTypes from 'prop-types';

const Formulario = ({crearCita}) => {

    //Crear State para formulario
    const [ cita, actualizarCita ] = useState({
        mascota: '',
        propietario:'',
        fecha:'',
        hora:'',
        sintomas:'',
    }); 

    //state para el error de la validacion de formularios

    const [ error, actualizarError] = useState(false);

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
        if(mascota.trim() == '' || propietario.trim() == '' || fecha.trim() == '' || hora.trim() == '' || sintomas.trim() == ''){
            actualizarError(true);
            return;
        }

        actualizarError(false);

        //asignar una ID
        cita.id = uuid();;

        //crear la cita
        crearCita(cita);

        //Reiniciar el form
        actualizarCita({
            mascota: '',
            propietario:'',
            fecha:'',
            hora:'',
            sintomas:'',
        });
    }

    return ( 
        <Fragment>

            <h2>Crear Cita</h2>

            {error ? <p className="alerta-error">Todos los campos son Obligatorios</p> : null}

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

Formulario.propTypes ={
    crearCita: PropTypes.func.isRequired
}
 
export default Formulario;