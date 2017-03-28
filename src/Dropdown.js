/**
 * Created by timur on 2/20/17.
 */

import React from 'react'
import cuid from 'cuid'
import { Link } from 'react-router'

const Dropdown = ({ dropup, children, title, right }) => {

  const id = cuid()

  const items = [].concat(children)

  const dropdownItems = items.map((item, i) => {

    const { to, href } = item.props

    let dropdownItem

    if (item.type === 'hr') {
      dropdownItem = (
        <li
          key={i}
          role="separator"
          className="divider"
        />
      )
    }
    else if (item.type === 'header') {
      dropdownItem = (
        <li
          key={i}
          className="dropdown-header"
        >
          {item}
        </li>
      )
    }
    else if (item.props.disabled) {
      dropdownItem = (
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
    else if (to) {
      dropdownItem = (
        <li key={i}>
          <Link
            to={to}
            children={item}
          />
        </li>
      )
    }
    else {
      dropdownItem = (
        <li key={i}>
          <a href={href ? href : '#'}>
            {item}
          </a>
        </li>
      )
    }

    return dropdownItem
  })

  return (
    <div className={dropup ? 'dropup' : 'dropdown'}>
      <a
        id={id}
        className={`btn btn-default dropdown-toggle${right ? ' pull-right' : ''}`}
        type="button"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="true"
      >
        {title} <span className="caret"/>
      </a>

      <ul
        className={`dropdown-menu${right ? ' dropdown-menu-right' : ''}`}
        aria-labelledby={id}
      >
        {dropdownItems}
      </ul>
    </div>
  )
}
Dropdown.propTypes = {
  children: React.PropTypes.any.isRequired
}

export default Dropdown
