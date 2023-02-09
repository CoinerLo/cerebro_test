import { useCallback, useState } from 'react'
import { Input } from './Input'
import './App.css'

function App() {
  const [currentNumber, setCurrentNumber] = useState<undefined | number>(undefined)

  return (
    <form className="App">
      <h1>Введите число</h1>
      <Input currentNumber={currentNumber} setCurrentNumber={setCurrentNumber} className='fontLarge' />
    </form>
  )
}

export default App
