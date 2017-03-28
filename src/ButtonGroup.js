/**
 * Created by timur on 3/13/17.
 */

import React from 'react'
import Button from './Button'

const ButtonGroup = ({ children, size }) => (

  <div className="btn-group" role="group">
    {[].concat(children).map((child, i) => {

      if (child.props.toolbar) {
        return (
          <div className="btn-toolbar" role="toolbar">
            {child.props.children}
          </div>
        )
      }
      else if (child.type === 'button') {
        return (
          <Button
            key={i}
            size={size}
          >
            {child.props.children}
          </Button>
        )
      }
      else {
        return child
      }
    })}
  </div>
)

export default ButtonGroup
