import React from 'react'
import { getEquipos } from "../hooks/stateApi.js";
import estilos from '../sass/lista.module.scss'
import CardTeam from './CardTeam.jsx';

function Lista() {

  const { data: list, isLoading, isError, error } = getEquipos()

  if (isLoading) {
    return <div> <h3>Loading...</h3> </div>
  } else if (isError) {
    return <div><p>Error: {error} </p></div>
  }

  return (
    <section className={estilos.cuerpoLista} >

      <div className={estilos.contContador} >
        <h2>Inscritos {list.length} / 32 </h2>
      </div>

      <div className={estilos.contList} >
        <h2>LISTA DE EQUIPOS</h2>
        <div className={estilos.contCards} >
          {
            list.map(equipo => (
              <CardTeam key={equipo.id} team={equipo} />
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Lista