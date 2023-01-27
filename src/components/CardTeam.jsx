import estilos from '../sass/cardTeam.module.scss'

function CardTeam({team}) {
  return (
    <div className={estilos.cuerpo} >
      <div className={estilos.contCard} >
        <h3>Nombre del Equipo: <span>{team.name}</span> </h3>
        <h4>Capitan: <span>{team.captain}</span> </h4>
        <h4>Fecha de Juego: <span>{team.date}</span> </h4>
      </div>
    </div>
  )
}

export default CardTeam