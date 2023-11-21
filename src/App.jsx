import { useState, useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log("useEffect starting")
    const intervalId = setInterval(() => {
      setCount(c => c + 1); 
    }, 3000);
    return () => clearInterval(intervalId);
  }, []); 


  return (
    <>     
      <h1>Counter</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>  
      <div>
        <button onClick={() => setCount((count) => count = 0)}>
          Reset
        </button>
      </div>    
    </>
  )
}

export default App
