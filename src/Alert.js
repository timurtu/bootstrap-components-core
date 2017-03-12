/**
 * Created by timur on 2/12/17.
 */

import React from 'react'

const Alert = ({
  type,
  children
}) => (
  <div
    className={`alert alert-${type ? type : 'default'}`}
    role="alert"
  >
    {children}
  </div>
)

export default Alert
