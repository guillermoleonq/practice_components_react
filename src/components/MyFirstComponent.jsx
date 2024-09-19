
export const MyFirstComponent = () => {
const name = "Guillermo Leon";
const github_profile = "https://gitub.com/guillermoleonq";
const student ={
  name: "Miguel",
  last_name: "Leon",
  mobile: "3001234567",
  linkedind_profile: "www.linkedin.com/in/guillermo-leon-q-ph-webdev"
} 

return (
    <>
      <div>MyFirstComponent</div>
      <div className="container mt-4">
        <h1>Temmas de React</h1>
        <ul>
          <li>Componentes</li>
          <li>Eventos</li>
          <li>Estados Hooks</li>
          <li>Props</li>
        </ul>
      </div>
      <div className="container py-2 mb-3">
        <h1>Datos del Docente</h1>
        <p>Nombre: <strong>{name }</strong></p>
        <p>GitHub: <a href="">{ github_profile }</a> </p>
      </div>
      <div className="container py-2">
        <h1>Datos del Estudiante</h1>
        <p>Nombre: <strong>{ student.name }</strong></p>
        <p>Apellido: { student.last_name } </p>
        <p>Celular: { student.mobile } </p>
        <p>LinkedIn: <a href= { student.linkedind_profile}>{ student.linkedind_profile }</a> </p>
      </div>
      <div className="container mt-2 pt-2">
        <h1>Objeto Completo</h1>
        <pre>{JSON.stringify(student)} </pre>
      </div>
    </>
  )
}
