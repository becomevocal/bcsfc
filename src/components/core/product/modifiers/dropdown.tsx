import React from 'react'

import { ModifierProps } from './types'

const Dropdown: React.FunctionComponent<ModifierProps> = ({
  option_values = [],
  required,
  name,
  display_name,
  id,
  onFormChange = (): void => {},
  onChange = (): void => {},
}) => {
  const onSelectChange = (e: any): void => {
    const value = {}
    value[id] = option_values.find((selected: any) => selected.id * 1 === e.target.value * 1)

    if (onChange) {
      onChange(value)
    }

    if (onFormChange) {
      onFormChange(value)
    }
  }

  return (
    <div>
      <label id={`label-${display_name}`} htmlFor={id}>
        {display_name}
      </label>
      <select
        aria-labelledby={`label-${display_name}`}
        id={id}
        required={required}
        onChange={onSelectChange}
        name={name}
      >
        {option_values.map(option => (
          <option value={option.id}>{option.label}</option>
        ))}
      </select>
    </div>
  )
}

export { Dropdown }
