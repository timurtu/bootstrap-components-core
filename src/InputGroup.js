/**
 * Created by timur on 2/20/17.
 */

import React from 'react'

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
      }

      return item
    })

    return (
      <div className={`input-group${size ? ' input-group' + size : ''}`}>
        {inputs}
      </div>
    )
  }
}

export default InputGroup
