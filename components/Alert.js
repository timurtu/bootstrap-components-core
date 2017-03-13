/**
 * Created by timur on 2/12/17.
 */

import React from 'react';

var Alert = function Alert(_ref) {
  var type = _ref.type,
      children = _ref.children;
  return React.createElement(
    'div',
    {
      className: 'alert alert-' + (type ? type : 'default'),
      role: 'alert'
    },
    children
  );
};

export default Alert;