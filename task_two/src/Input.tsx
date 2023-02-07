import { FC } from "react"

interface InputProps {
  currentNumber: undefined | string
  changeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void
  className?: string
}

export const Input: FC<InputProps> = ({ currentNumber, changeHandler, className }) => {
  return (
    <input
      name="current_number"
      type="number"
      className={className ?? ''}
      onChange={changeHandler}
      value={currentNumber}
      step="any"
    />
  )
}
