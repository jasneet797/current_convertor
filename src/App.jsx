import { useState } from 'react'
import './App.css'
import InputBox from './components/Input.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <h1 className="text-2-xl bg-orange-400 color-white">Cash convertor using react</h1> */}
      <InputBox/>
    </>
  )
}

export default App
