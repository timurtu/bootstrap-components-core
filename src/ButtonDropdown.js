/**
 * Created by timur on 3/28/17.
 */

import React from 'react'

const ButtonDropdown = () => (
  <div className="btn-group">
    <button
      type="button"
      className="btn btn-default dropdown-toggle"
      data-toggle="dropdown"
      aria-haspopup="true"
      aria-expanded="false"
    >
      Action <span className="caret" />
    </button>
    <ul className="dropdown-menu">
      <li><a href="#">Action</a></li>
      <li><a href="#">Another action</a></li>
      <li><a href="#">Something else here</a></li>
      <li role="separator" className="divider" />
      <li><a href="#">Separated link</a></li>
    </ul>
  </div>
)

export default ButtonDropdown
