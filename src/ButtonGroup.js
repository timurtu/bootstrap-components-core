/**
 * Created by timur on 3/13/17.
 */

import React from 'react'
import Button from './Button'
import Dropdown from './Dropdown'

class ButtonGroup extends React.Component {

  render() {

    const {
      children,
      size,
      toolbar,
      dropdown,
      title
    } = this.props

    if (toolbar) {
      return (
        <div
          className="btn-toolbar"
          role="toolbar"
        >
          {children}
        </div>
      )
    }

    const buttons = dropdown ? (
      <Dropdown title={title}>
        {children}
      </Dropdown>
    ) : [].concat(children).map((child, i) => {

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
    })

    return (
      <div
        className="btn-group"
        role="group"
      >
        {buttons}
      </div>
    )
  }
}

export default ButtonGroup
