/**
 * Created by timur on 3/13/17.
 */

import React from 'react'
import Button from './Button'

const ButtonGroup = ({ children, size, toolbar }) => toolbar ? (
  <div
    className="btn-toolbar"
    role="toolbar"
  >
    {children}
  </div>
) : (
  <div
    className="btn-group"
    role="group"
    style={{
      display: 'block'
    }}
  >
    {[].concat(children).map((child, i) => {

      if (child === undefined) {
        return null
      }

      if (child.type === 'button') {
        return (
          <Button
            key={i}
            size={size}
          >
            {child.props.children}
          </Button>
        )
      }

      return child
    })}
  </div>
)

export default ButtonGroup
