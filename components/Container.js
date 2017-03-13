var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

/**
 * Created by timur on 2/11/17.
 */

import React from 'react';

var Container = function Container(props) {
  return React.createElement(
    "div",
    _extends({}, props, {
      className: "container"
    }),
    props.children
  );
};

export default Container;