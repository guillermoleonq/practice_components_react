import './App.css';
import { useState } from 'react';

import { Child } from './components/Child';

function App() {

  const [name,setName] = useState ("Lina Marulanda");

  return (
    <div className="App">
      <header className="App-header">
  
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