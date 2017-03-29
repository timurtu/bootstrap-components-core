/**
 * Created by timur on 3/28/17.
 */

import React from 'react'
import ButtonGroup from './ButtonGroup'

const ButtonDropdown = ({ title, type, children, split }) => (
  <ButtonGroup
    dropdown
    title={title}
    type={type}
    split={split}
  >
    {children}
  </ButtonGroup>
)

export default ButtonDropdown
