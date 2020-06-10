import React, { useState } from 'react'

import { ModifierProps } from './types'

const Text: React.FunctionComponent<ModifierProps> = ({
  required,
  name,
  display_name,
  id,
  onFormChange = (): void => {},
  onChange = (): void => {},
  config = {},
}) => {
  const [inputText, setInputText] = useState(config.default_value)

  const onInputChange = (e: any): void => {
    const text = e.target.value
    const value = {}
    value[e.target.id] = text
    setInputText(text)

    if (onChange) {
      onChange(value)
    }

    if (onFormChange) {
      onFormChange(value)
    }
  }

  return (
    <div>
      <label id={`label-${id}`} htmlFor={id}>
        {display_name}
      </label>
      <input
        type="text"
        aria-labelledby={`label-${id}`}
        id={id}
        required={required}
        name={name}
        value={inputText}
        minLength={config.text_min_length}
        maxLength={config.text_max_length}
        onChange={onInputChange}
      />
    </div>
  )
}

export { Text }
