import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div class="app-container">
    <button>Show all</button>
    <div className="search-container">
      <input type='text' placeholder='enter country'/>
      <button>Search</button>
    </div>
    </div>
  )
}

export default App
