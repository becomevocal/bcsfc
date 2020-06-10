import React, { useState } from 'react'

import { ModifierProps } from './types'

const Checkbox: React.FunctionComponent<ModifierProps> = ({
  option_values = [],
  name,
  display_name,
  id,
  onFormChange = (): void => {},
  onChange = (): void => {},
}) => {
  const defaultOption = option_values.find(option => option.is_default === true)
  const [checked, setChecked] = useState([defaultOption])

  const onInputChange = (e: any): void => {
    const optionId = e.target.id * 1
    const isChecked = e.target.checked
    const selected = option_values.find((curOption: any) => curOption.id * 1 === optionId)
    const newChecked = isChecked
      ? [...checked, selected]
      : checked.filter((curOption: any) => curOption.id * 1 !== optionId)
    const value = {}
    value[id] = newChecked

    setChecked(newChecked)

    if (onChange) {
      onChange(value)
    }

    if (onFormChange) {
      onFormChange(value)
    }
  }

  return (
    <div>
      <span id={`label-${display_name}`}>{display_name}</span>
      {option_values.map(option => [
        <label id={`label-${option.id}`} htmlFor={option.id}>
          {option.label}
        </label>,
        <input
          type="checkbox"
          checked={!!checked.find((checkedOption: any) => checkedOption.id === option.id)}
          aria-labelledby={`label-${option.id}`}
          id={option.id}
          required={option.required}
          name={name}
          value={option.value_data.checked_value}
          onChange={onInputChange}
        />,
      ])}
    </div>
  )
}

export { Checkbox }
