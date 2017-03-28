/**
 * Created by timur on 2/11/17.
 */

import React from 'react'

const Button = props => {

  const {
    size,
    type,
    children,
    className
  } = props
  const btnSize = size ? `btn-${size}` : ''
  const btnType = type ? `btn-${type}` : 'btn-default'
  const interpretedClassName =
    `btn ${btnSize || ''} ${btnType || ''} ${className || ''}`
      .split(/\s+/)
      .join(' ')
      .trim()

  return (
    <a
      role="button"
      {...props}
      className={interpretedClassName}
    >
      {children}
    </a>
  )
}

export default Button
