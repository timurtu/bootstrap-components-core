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

  return (
    <button
      {...props}
      className={`btn ${btnSize} ${btnType} ${className ? className : ''}`.trim()}
    >
      {children}
    </button>
  )
}

export default Button
