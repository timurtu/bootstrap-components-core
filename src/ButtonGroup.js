/**
 * Created by timur on 3/13/17.
 */

import React from 'react'
import Button from './Button'
import Dropdown from './Dropdown'

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
  >
    {[].concat(children).map((child, i) => {

      if (child === undefined) {
        return null
      }

      if (child.type === 'button') {

        if(child.props.dropdown) {
          return (
            <Dropdown
              key={i}
              title={child.props.title}
              style={{
                display: 'inline-block'
              }}
            >
              {child.props.children}
            </Dropdown>
          )
        }

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
