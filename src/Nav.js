/**
 * Created by timur on 4/25/17.
 */

import React from 'react'

class Nav extends React.Component {

  render() {
    const { children, tabs } = this.props

    const items = [].concat(children)

    const links = items.map((item, i) => {

      if (item === undefined) {
        return null
      }

      switch (item.type) {
        case 'div':
          return (
            <li
              key={i}
              role="presentation"
              className={item.props.active ? 'active' : ''}
            >
              <a href={item.props.href ? item.props.href : '#'}>
                {item.props.children}
              </a>
            </li>
          )
      }
      return item
    })

    return (
      <ul className={`nav${tabs ? ' nav-tabs' : ''}`}>
        {links}
      </ul>
    )
  }
}

export default Nav
