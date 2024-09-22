export const SecondComponent = () => {

    const books = [
      "Harry Potter y la piedra filosofal",
      "Harry Potter y la cámara secreta",
      "Harry Potter y el prisionero de Azkaban",
      "Harry Potter y el cáliz de fuego",
      "Harry Potter y la Orden del Fénix",
      "Harry Potter y el misterio del Príncipe",
      "Harry Potter y las Reliquias de la Muerte",
      "Animales Fantásticos y dónde encontrarlos",
      "Otro libro",
      "De nuevo otro libro"
    ];
    
    return (
      <>
        <div className="container mt-2 py-2">
          <h1>SecondComponent</h1>
          <div>
            <ul>
              {books.length >= 1 ?
                (
                  books.map((book, index) => {
                    return <li key={ index }> { book } </li>
                  })
                ) :
                (
                  <p>No existen libros</p>
                )
              }
            </ul>
    
          </div>
        </div>
      </>
    )
}