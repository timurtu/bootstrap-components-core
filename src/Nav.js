/**
 * Created by timur on 4/25/17.
 */

import React from 'react'

class Nav extends React.Component {

  render() {
    const {
      children,
      tabs,
      pills,
      stacked,
      justified
    } = this.props

    const items = [].concat(children)

    const links = items.map((item, i) => {

      if (item === undefined) {
        return null
      }

      switch (item.type) {
        case 'div':

          const className = `${
            item.props.active ? 'active' : ''}${
            item.props.disabled ? ' disabled' : ''
            }`

          return (
            <li
              key={i}
              role="presentation"
              className={className}
            >
              <a href={item.props.href ? item.props.href : '#'}>
                {item.props.children}
              </a>
            </li>
          )
      }
      return item
    })

    const className = `nav${
      tabs ? ' nav-tabs' : ''
      }${
      pills ? ' nav-pills' : ''
      }${
      stacked ? ' nav-stacked' : ''
      }${
      justified ? ' nav-justified' : ''
      }`

    return (
      <ul className={className}>
        {links}
      </ul>
    )
  }
}

export default Nav
