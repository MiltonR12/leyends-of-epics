import estilos from '../sass/reglas.module.scss'

function Reglas() {
  return (
    <section className={estilos.cuerpo} >
      <h1>INFORMACION</h1>
      <div className={estilos.contReglas} >
        <div className={estilos.contPunto} >
          <h3>🏆 COPA LEYEND OF EPICS ✨</h3>
        </div>
        <div className={estilos.contPunto} >
          <h4>🎮 REQUISITOS:</h4>
          <ul>
            <li>🕹 Tener 5 Integrantes.</li>
            <li>🕹 Tener un Nombre de Equipo</li>
            <li>🕹 2 Suplentes ( OPCIONAL )</li>
            <li>🕹 Ser de Bolivia 1 minimo</li>
          </ul>
        </div>
        <div className={estilos.contPunto} >
          <h4>🎮 Modalidad:</h4>
          <ul>
            <li>🕹 Se jugara en la modalidad de Personalizada/Clasificatoria</li>
            <li>🕹 Doble eliminacion</li>
          </ul>
        </div>
        <div className={estilos.contPunto} >
          <h4>🎮 FECHA Y HORA</h4>
          <ul>
            <li>🕹 Inicio del tonreo 1 de febrero</li>
            <li>🕹 Cada encuentro se dara a partir de las 21:00 PM</li>
          </ul>
        </div>
        <div className={estilos.contPunto} >
          <h4>🎮 PREMIOS</h4>
          <ul>
            <li>🕹 1er. Lugar.</li>
          </ul>
        </div>
        <div className={estilos.contPunto} >
          <h4>🎮 REGLAMENTO:</h4>
          <ul>
            <li>🕹 Se permite 2 pausas por encuentro de 5 minutos cada uno.</li>
            <li>🕹 No esta permitido el uso de hacks o ventajas.</li>
            <li>🕹 No se permite expectadores en la sala excepto los administradores y caster.</li>
            <li>🕹 No esta permitido la conducta antideportiva en el chat del juego.</li>
            <li>🕹 Tiempo maximo de espera para su encuentro es de 10 minutos.</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Reglas