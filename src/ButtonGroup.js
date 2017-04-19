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
      dropup,
      title,
      vertical,
      justified,
      type,
      style,
      split
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

        if (justified) {
          return (
            <div
              key={i}
              className="btn-group"
              role="group"
            >
              {button}
            </div>
          )
        }

        return button
      }

      return child
    })

    const className = `btn-group${vertical ? '-vertical' : ''}${dropup ? ' dropup ' : ''}${justified ? ' btn-group-justified' : ''}`

    if (dropdown || dropup) {
      return (
        <Dropdown
          group
          title={title}
          className={className}
          type={type}
          style={style}
          split={split}
          size={size}
        >
          {children}
        </Dropdown>
      )
    }

    return (
      <div
        className={className}
        role="group"
        style={style}
      >
        {buttons}
      </div>
    )
  }
}

export default ButtonGroup
