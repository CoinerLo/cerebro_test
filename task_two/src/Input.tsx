import { Dispatch, FC, SetStateAction } from "react"

interface InputProps {
  currentNumber: undefined | number
  setCurrentNumber: Dispatch<SetStateAction<number | undefined>>
  className?: string
}

export const Input: FC<InputProps> = ({ currentNumber, setCurrentNumber, className }) => {
  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valueString = e.target.value
    if (!valueString) {
      setCurrentNumber(undefined)
    } else {
      const valueFloat = parseFloat(valueString.replace(',', '.'))
      if (valueFloat.toString() === valueString) {
        setCurrentNumber(valueFloat)
        console.log(currentNumber)
      }
    }
  }

  return (
    <input
      name="current_number"
      type="number"
      className={className ?? ''}
      onChange={onChangeInput}
      value={currentNumber?.toString() ?? ''}
      step="any"
    />
  )
}
