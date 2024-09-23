export const FourthComponent = () => {

  const handleClicked = (e, name) => {
    alert("Has hecho click en el botón!! " + name);
  }

  const handleDoubleClicked = (e) => {
    alert("Has hecho DOBLE click al botón");
  }

  const handleMouseEnter = (e) => {
    alert("Has ENTRADO a la caja con el Mouse!! ");
  }

  const handleMouseLeave = (e) => {
    alert("Has SALIDO de la caja!! ");
  }

  const handleMouse = (e, action) => {
    alert(`Has ${action} la caja `);
    }

  const handleInsideInput = (e) => {
    console.log("Estás DENTRO del input, escribe tu nombre!!");
  }

  const handleOutsideInput = (e) => {
    console.log("Estás FUERA del input, Adiós!!");
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

        <div>
          <button className="btn btn-info" 
          onDoubleClick={ handleDoubleClicked }>
          Haz DOBLE click!!</button>
        </div><hr />

        <div id="box1"
          className="mt-4"
          onMouseEnter={ e => handleMouseEnter(e) }
          onMouseLeave={ e => handleMouseLeave(e) }
        >
        <p>Pasa el mouse por encima</p><hr />
        </div>

        <div id="box2"
          className="mt-4"
          onMouseEnter={ e => handleMouse(e, "entrado a")}
          onMouseLeave={ e => handleMouse(e, "salido de")}
        >
          <p>Pasa el MOUSE por encima</p><hr />
        </div>

        <div className="mt-4">
          <input type="text"
          onFocus={ e => handleInsideInput(e)}
          onBlur={ e => handleOutsideInput(e)}
          />
        </div>
    </div>
  )
}