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
      className,
      type,
      style,
      split,
      size
    } = this.props
    const items = [].concat(children)
    const dropdownItems = items.map((item, i) => {

      if (item === undefined) {
        return null
      }

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
      `btn btn-${type ? type : 'default'} ${size ? `btn-${size}` : ''} dropdown-toggle${right ? ' pull-right' : ''}`


    const dropdownLink = split ? (
      <div>
        <button
          className={dropdownLinkClassName}
          style={style}
        >
          {title}
        </button>

        <button
          className={dropdownLinkClassName}
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
          style={style}
        >
          <span className="caret" />
          <span className="sr-only">Toggle Dropdown</span>
        </button>
      </div>
    ).props.children : (
      <a
        className={dropdownLinkClassName}
        data-toggle="dropdown"
        role="button"
        aria-haspopup="true"
        aria-expanded="false"
        style={style}
      >
        {title}
        {' '}
        <span className="caret" />
        <span className="sr-only">Toggle Dropdown</span>
      </a>
    )

    const dropdownMenu = (
      <ul className={`dropdown-menu${right ? ' dropdown-menu-right' : ''}`}>
        {dropdownItems}
      </ul>
    )

    if (group) {
      return (
        <div className={className}>
          {dropdownLink}
          {dropdownMenu}
        </div>
      )
    }

    return (
      <div
        style={style}
        className={dropup ? 'dropup' : 'dropdown'}
      >
        {dropdownLink}
        {dropdownMenu}
      </div>
    )
  }
}

export default Dropdown
