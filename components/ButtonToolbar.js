/**
 * Created by timur on 3/13/17.
 */

import React from 'react';

var ButtonToolbar = function ButtonToolbar(_ref) {
  var children = _ref.children;
  return React.createElement(
    "div",
    { className: "btn-toolbar" },
    children
  );
};

export default ButtonToolbar;