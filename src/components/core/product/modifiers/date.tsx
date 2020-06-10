import React, { useState } from 'react'
import Flatpickr from 'react-flatpickr'
import 'flatpickr/dist/themes/airbnb.css'
import { ModifierProps } from './types'

const DateInput: React.FunctionComponent<ModifierProps> = ({
  display_name,
  id,
  onFormChange = (): void => {},
  onChange = (): void => {},
  config = {},
}) => {
  const [inputDate, setDate] = useState(config.default_value)

  const onDateChange = (newDate: any): void => {
    const value = {}
    value[id] = newDate
    setDate(newDate)

    if (onChange) {
      onChange(value)
    }

    if (onFormChange) {
      onFormChange(value)
    }
  }

  const pickerOptions = {
    maxDate: config.date_latest_value,
    minDate: config.date_earliest_value,
  }
  return (
    <div>
      <label id={`label-${id}`} htmlFor={id}>
        {display_name}
      </label>
      <Flatpickr value={inputDate} onChange={onDateChange} options={pickerOptions} />
    </div>
  )
}

export { DateInput }
