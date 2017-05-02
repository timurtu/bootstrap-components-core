/**
 * Created by timur on 2/11/17.
 */

import React from 'react'

const Container = ({ fluid, ...props }) => (
  <div
    {...Object.keys(props).filter(prop => prop !== 'fluid' && prop !== 'className')}
    className={`container${fluid ? '-fluid' : ''}`}
  >
    {props.children}
  </div>
)

export default Container
