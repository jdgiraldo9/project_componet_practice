import React from 'react'

const SecondComponet = () => {

const equipos =[
    "Colombia","Brazil","Argentina","Mexico","Uruguay","Panama"
];

  return (
    <div>
        <h2>Lista de paises que participan en la copa america: </h2>
        <ul style={{textAlign:'left'}}>
            {
            equipos.map((equipos,index ) => {
                return <li index > {equipos} </li >
                })
            }
        </ul>
    </div>
  )
}

export default SecondComponet
