/**
 * Created by timur on 2/11/17.
 */

import React from 'react';

var Icon = function Icon(props) {
  return React.createElement("span", {
    style: props.style,

    className: "glyphicon glyphicon-" + props.children,

    "aria-hidden": "true"
  });
};
Icon.propTypes = {
  children: React.PropTypes.string.isRequired
};

export default Icon;