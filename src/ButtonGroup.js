/**
 * Created by timur on 3/13/17.
 */

import React from 'react'
import Button from './Button'

const ButtonGroup = ({ children, size, toolbar }) => (

  <div className="btn-group" role="group">
    {[].concat(children).map((child, i) => {

      if (child === undefined) {
        return null
      }

      if (toolbar) {
        return (
          <div
            key={i}
            className="btn-toolbar"
            role="toolbar"
          >
            {child.props.children}
          </div>
        )
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
