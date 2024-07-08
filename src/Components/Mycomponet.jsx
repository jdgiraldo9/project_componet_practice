import React from 'react'
import PropTypes from 'prop-types'

const Mycomponet = ({name, lastName}) => {

    const student ={
        name: "Juan David",
        lastName:"Giraldo",
        mobil: "3012019307",
        linkedin: "https://www.linkedin.com/in/juan-david-giraldo-mancilla-5a00b5197/"
    }

  return (
    <div>
        <hr />
        <h4> Este es mi primer componente</h4>
        <p>Curso React</p>
        <p>Docente: <strong>{name}</strong></p>
        <ul>
            <li>componente</li>
            <li>Eventos</li>
            <li>Estados - Hooks</li>
            <li>Ecommenicaion</li>
        </ul>
        <p>Estudiante: <strong>{student.name} {student.lastName}</strong></p>
        <ul>
            <li>{student.mobil}</li>
            <li>{student.linkedin}</li>
        </ul>
        <hr/>
        {/*<p> Convertir un objeto en texto: {JSON.stringify(student)} </p>*/}
    </div>
  )
}

Mycomponet.prototype = {
    name: PropTypes.string,
    lastName: PropTypes.string
}
export default Mycomponet
