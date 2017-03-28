/**
 * Created by timur on 2/20/17.
 */

import React from 'react'
import { Link } from 'react-router'

class Dropdown extends React.Component {

  render() {
    const {
      dropup,
      children,
      title,
      right,
      group,
      className
    } = this.props
    const items = [].concat(children)
    const dropdownItems = items.map((item, i) => {

      const { to, href, disabled } = item.props

      switch (item.type) {
        case 'hr':
          return (
            <li
              key={i}
              role="separator"
              className="divider"
            />
          )

        case 'header':
          return (
            <li
              key={i}
              className="dropdown-header"
            >
              {item}
            </li>
          )
      }

      if (disabled) {
        return (
          <li
            key={i}
            className="disabled"
          >
            <a>
              {item}
            </a>
          </li>
        )
      }

      if (to) {
        return (
          <li key={i}>
            <Link
              to={to}
              children={item}
            />
          </li>
        )
      }

      return (
        <li key={i}>
          <a href={href ? href : '#'}>
            {item}
          </a>
        </li>
      )
    })

    const dropdownLinkClassName =
      `btn btn-default dropdown-toggle${right ? ' pull-right' : ''}`

    const dropdownLink = (
      <a
        href="#"
        className={dropdownLinkClassName}
        type="button"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="true"
        role="button"
      >
        {title} <span className="caret" />
      </a>
    )

    const dropdownMenu = (
      <ul
        className={`dropdown-menu${right ? ' dropdown-menu-right' : ''}`}
      >
        {dropdownItems}
      </ul>
    )

    return group ? (
      <div className={className}>
        {dropdownLink}
        {dropdownMenu}
      </div>
    ) : (
      <div className={dropup ? 'dropup' : 'dropdown'}>
        {dropdownLink}
        {dropdownMenu}
      </div>
    )
  }
}
Dropdown.propTypes = {
  children: React.PropTypes.any.isRequired
}

export default Dropdown
