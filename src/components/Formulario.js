import React,{Fragment, useState} from 'react';

const Formulario = () => {

    //Crear State para formulario
    const [ citas, actualizarCita ] = useState({
        mascota: '',
        propietario:'',
        fecha:'',
        hora:'',
        sintomas:'',
    }); 

    //funcion que se ejecuta cada que un usuario escribe en un input

    const actualizarState = () => {
        return ( 
            console.log('entre al imput')
         );
    }

    return ( 
        <Fragment>
            <h2>Crear Cita</h2>

            <form>
                <label>Nombre Mascota</label>
                <input
                    type="text"
                    name="mascota"
                    className="u-full-width"
                    placeholder="Nombre Mascota"
                    onChange={actualizarState}
                />
                <label>Nombre Dueño</label>
                <input
                    type="text"
                    name="propietario"
                    className="u-full-width"
                    placeholder="Nombre duseño de la mascota"
                    onChange={actualizarState}
                />
                <label>Fecha</label>
                <input
                    type="date"
                    name="fecha"
                    className="u-full-width"
                    onChange={actualizarState}
                />
                <label>Hora</label>
                <input
                    type="time"
                    name="hora"
                    className="u-full-width"
                    onChange={actualizarState}
                />
                <label>Sintomas</label>
                <textarea
                    className="u-full-width"
                    name="sintomas">
                    onChange={actualizarState}
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