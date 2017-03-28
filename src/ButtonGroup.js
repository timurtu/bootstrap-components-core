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
      title,
      vertical,
      justified
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

    const buttons = [].concat(children).map((child, i) => {

      if (child === undefined) {
        return null
      }

      if (child.type === 'button') {

        const button = (
          <Button
            key={i}
            size={size}
          >
            {child.props.children}
          </Button>
        )

        return justified ? (
          <div className="btn-group">
            {button}
          </div>
        ) : button
      }

      return child
    })

    const className = `btn-group${vertical ? '-vertical' : ''}${justified ? ' btn-group-justified' : ''}`

    const buttonGroup = dropdown ? (
      <Dropdown
        group
        title={title}
        className={className}
      >
        {children}
      </Dropdown>
    ) : (
      <div
        className={className}
        role="group"
      >
        {buttons}
      </div>
    )

    return buttonGroup
  }
}

export default ButtonGroup
