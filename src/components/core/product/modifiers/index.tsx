import React, { useEffect } from 'react'

import { Checkbox } from './checkbox'
import { DateInput } from './date'
import { Dropdown } from './dropdown'
import { Text } from './text'

interface ModifierConfig {
  type: string
  id: number
  config: any
  option_values: any[]
}

interface Props extends React.HTMLProps<HTMLElement> {
  modifiers: ModifierConfig[]
  map: object
  onFormChange?: (value: object) => void
  onFormInit?: (value: object) => void
}

const ModifierMap = {
  dropdown: Dropdown,
  checkbox: Checkbox,
  text: Text,
  date: DateInput,
}

const ProductModifiers: React.FunctionComponent<Props> = ({
  onFormInit = () => {},
  onFormChange = () => {},
  modifiers = [],
  map = ModifierMap,
}) => {
  if (onFormInit) {
    useEffect(() => {
      const defaults = modifiers.reduce((mem, { id, config, option_values }) => {
        const newMem = { ...mem }
        if (config && config.default_value) {
          newMem[id] = config.default_value
        } else if (option_values.length) {
          const defaultOption = option_values.find(option => option.is_default === true)
          newMem[id] = defaultOption || option_values[0]
        }
        return newMem
      }, {})
      onFormInit(defaults)
    }, [modifiers])
  }

  return modifiers.map(modifier => {
    const ModifierComponent = map[modifier.type]
    if (!ModifierComponent) {
      // eslint-disable-next-line no-console
      console.info(`Modifier ${modifier.type} not yet implemented: ${JSON.stringify(modifier)}`)
      return null
    }

    return <ModifierComponent onFormChange={onFormChange} {...modifier} />
  }) as any
}

export { ProductModifiers, ModifierConfig }
