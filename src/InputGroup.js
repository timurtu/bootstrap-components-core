/**
 * Created by timur on 2/20/17.
 */

import React from 'react'

class InputGroup extends React.Component {

  render() {
    const { children } = this.props

    const items = [].concat(children)

    const inputs = items.map((item, i) => {

      if (item === undefined) {
        return null
      }

      // const { to, href, disabled } = item.props

      switch (item.type) {
        case 'addon':
          return (
            <span
              key={i}
              className="divider"
            >
              {item.props.children}
            </span>
          )

        case 'input':
          return (
            <input
              key={i}
              {...item.props}
            >
              {item.props.children}
            </input>
          )
      }

      return item
    })

    return (
      <div className="input-group">
        {inputs}
      </div>
    )
  }
}

export default InputGroup
