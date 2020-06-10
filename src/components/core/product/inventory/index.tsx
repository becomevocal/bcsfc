/**
 * @function Inventory Level
 */

import * as React from 'react'

import style from './inventory.module.css'

interface Props extends React.HTMLProps<HTMLElement> {
  tag?: string
  classes?: string
  styles?: object
  showInventoryLevel?: boolean
  inventoryLevel: number
  showWarning?: boolean
  inventoryWarningLevel: number
  warningMessage?: string
}

const ProductInventory: React.FunctionComponent<Props> = (props: Props) => {
  const {
    tag = 'span',
    classes = '',
    styles = {},
    showInventoryLevel = true,
    inventoryLevel,
    showWarning = true,
    inventoryWarningLevel,
    warningMessage = '',
  } = props

  const setInventoryLevel = (): string | object => {
    if (!showInventoryLevel) {
      return ''
    }

    return <span className={style.bcProductInventoryLevel}>{inventoryLevel} In Stock</span>
  }

  const setInventoryWarning = (): string | object => {
    if ((inventoryLevel > inventoryWarningLevel && showWarning) || !showWarning) {
      return ''
    }

    return (
      // TODO: Need to consider i18n here.
      <span className={style.bcProductLowInventoryWarning}>
        {warningMessage || `${inventoryLevel} left in stock.`}
      </span>
    )
  }

  return React.createElement(
    tag,
    {
      className: `${style.bcProductInventoryLevel} ${classes}`,
      style: styles,
    },
    [setInventoryLevel(), setInventoryWarning()]
  )
}

export { ProductInventory }
