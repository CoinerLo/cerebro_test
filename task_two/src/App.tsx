import { useCallback, useState } from 'react'
import { Input } from './Input'
import './App.css'

function App() {
  const [currentNumber, setCurrentNumber] = useState<undefined | string>(undefined)

  const changeHandler = useCallback(({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentNumber(target.value)
  }, [])

  return (
    <form className="App">
      <h1>Введите число</h1>
      <Input currentNumber={currentNumber} changeHandler={changeHandler} className='fontLarge' />
    </form>
  )
}

export default App
