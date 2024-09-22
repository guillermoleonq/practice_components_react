import './App.css';
import { useState } from 'react';
// import { MyFirstComponent } from './components/MyFirstComponent';
// import { SecondComponent } from './components/SecondComponent';
import { ThirdComponent } from './components/ThirdComponent';
import { Child } from './components/Child';

function App() {

  const [name,setName] = useState ("Lina");

  return (
    <div className="App">
      <header className="App-header">
        <h1>Fundamentos de React</h1>
        <hr className='white-hr' />
        {/* <MyFirstComponent /> */}
        <hr className='white-hr' />
        {/* <SecondComponent /> */}
        <hr className='white-hr' />
        <ThirdComponent 
          name="Guillermo"
          last_name="Leon"
          age="30"
        /> 
        <hr className='white-hr' />
        <Child 
          name = {name}
          setName={setName} 
        />
        <hr className='white-hr' />
      </header>
    </div>
  )
};

export default App