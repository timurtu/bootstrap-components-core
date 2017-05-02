/**
 * Created by timur on 2/11/17.
 */

import React from 'react'

const Container = ({ fluid, ...props }) => (
  <div
    {...props}
    className={`container${props.fluid ? '-fluid' : ''}`}
  >
    {props.children}
  </div>
)

export default Container
