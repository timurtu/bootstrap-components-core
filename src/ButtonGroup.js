/**
 * Created by timur on 3/13/17.
 */

import React from 'react'
import Button from './Button'

const ButtonGroup = ({ children }) => (
  <div className="btn-group">
    {children.map(button =>
      <Button>{button.children}</Button>
    )}
  </div>
)

export default ButtonGroup
