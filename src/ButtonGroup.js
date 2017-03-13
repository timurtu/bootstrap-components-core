/**
 * Created by timur on 3/13/17.
 */

import React from 'react'
import Button from './Button'

const ButtonGroup = ({ children, size }) => (

  <div className="btn-group" role="group">
    {[].concat(children).map((child, i) =>

      child.type === 'Dropdown' ?
        child :
        <Button
          key={i}
          size={size}
        >
          {child.props.children}
        </Button>
    )}
  </div>
)

export default ButtonGroup
