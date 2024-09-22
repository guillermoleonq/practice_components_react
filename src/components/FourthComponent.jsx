

export const FourthComponent = () => {

  const handleClicked = (e, name) => {
    alert("Has hecho click en el botón!! " + name);
  }

  const handleDoubleClicked = (e) => {
    alert("Has hecho DOBLE click al botón");
  }
  // onMouseEnter y onMouseLeave con dos funciones
  const handleMouseEnter = (e) => {
    alert("Has ENTRADO a la caja con el Mouse!! ");
  }

  const handleMouseLeave = (e) => {
    alert("Has SALIDO de la caja!! ");
  }

  // onMouseEnter y onMouseLeave con una sola función con Alert
  const handleMouse = (e, action) => {
    alert(`Has ${action}  la caja`);
  }

  // onMouseEnter y onMouseLeave con una sola función con  Console Log
  const handleMouseCl = (e, action) => {
    console.log(`Has ${action}  la caja`);
  }

  // onFocus
  const insideInput = (e) => {
    console.log("Estás dentro del input, escribe tu nombre!!");
  }

  // onBlur
  const outsideInput = (e) => {
    console.log("Estás FUERA del input, Adiós!!")
  }

  return (
    <div>
        <h1>Fourth Component</h1>
        {/* Evento Click */}
        <div>
          <button 
            className= "btn btn-danger" 
            onClick={ () => {
                alert("Hola, soy un evento Click!!");
            } }>
            Haz Click!!
          </button>
        </div>
        <div>
          <button 
            className= "btn btn-success" 
            onClick={e => handleClicked(e, "Miguel")}
            >
            Aquí también haz Click! 
            </button>
        </div>

        {/* Evento Doble Click */}
        <div>
          <button className="btn btn-info" 
          onDoubleClick={ handleDoubleClicked }>
          Haz DOBLE click!!</button>
        </div><hr />

        {/* Evento Mouse Enter y Mouse Leave */}
        <div id="box1"
          onMouseEnter={ e => handleMouseEnter(e) }
          onMouseLeave={ e => handleMouseLeave(e) }
        >
        <p>Pasa el mouse por encima</p><hr />
        </div>


        {/* <div id="box2"
            onMouseEnter={ e => handleMouse(e, "entrado a") }
            onMouseLeave={ e => handleMouse(e, "salido de") }
          >
          <p>Pasa el Mouse por encima!!!</p>
        </div>

        <div id="box3"
            onMouseEnter={ e => handleMouseCl(e, "entrado a") }
            onMouseLeave={ e => handleMouseCl(e, "salido de") }
          >
          <p>Pasa el Mouse por encima!!!</p>
          </div>
        </div>

        Evento Focus y Blur se usan en el input
        <div className='mt-4'>
          <input type="text"
            onFocus={ insideInput }
            onBlur={ outsideInput }
            placeholder='Escribe tu nombre'
          />
        </div> */}
    </div>
  )
}