/**
 * Created by timur on 2/20/17.
 */

import React from 'react'
import Button from './Button'

class InputGroup extends React.Component {

  render() {
    const { children, size } = this.props

    const items = [].concat(children)

    const inputs = items.map((item, i) => {

      if (item === undefined) {
        return null
      }

      switch (item.type) {
        case 'addon':
          return (
            <span
              key={i}
              className="input-group-addon"
            >
              {item.props.children}
            </span>
          )

        case 'input':
          return (
            <input
              key={i}
              className="form-control"
              {...item.props}
            >
              {item.props.children}
            </input>
          )

        case 'button':
          return (
            <span className="input-group-btn">
              <Button
                key={i}
                {...item.props}
              >
                {item.props.children}
              </Button>
            </span>
          )
      }

      return item
    })

    return (
      <div className={`input-group${size ? ' input-group-' + size : ''}`}>
        {inputs}
      </div>
    )
  }
}

export default InputGroup
