import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className='text-center font-bold text-3xl'>Texty</h1>
      
        <button  className="border-1 p-2 items-center" onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        
    </>
  )
}

export default App
