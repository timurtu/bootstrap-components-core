/**
 * Created by timur on 3/13/17.
 */

import React from 'react';
import Button from './Button';

var ButtonGroup = function ButtonGroup(_ref) {
  var children = _ref.children,
      toolbar = _ref.toolbar;
  return React.createElement(
    'div',
    { className: 'btn-group' },
    children.map(function (button, i) {
      return React.createElement(
        Button,
        { key: i },
        button.props.children
      );
    })
  );
};

export default ButtonGroup;