import { HTMLProps } from React;

interface ModifierOptions {
  id: string
  option_id: number
  label: string
  sort_order: number
  is_default: boolean
  required?: boolean
  value_data?: any
}

interface ModifierProps extends HTMLProps<HTMLElement> {
  id: string
  option_values: ModifierOptions[]
  name: string
  required: boolean
  display_name: boolean
  config?: any
  onChange?: (value: object) => void;
  onFormChange?: (value: object) => void;
}

export { ModifierOptions, ModifierProps }
