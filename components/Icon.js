"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Icon = function Icon(props) {
  return _react2.default.createElement("span", {
    style: props.style,

    className: "glyphicon glyphicon-" + props.children,

    "aria-hidden": "true"
  });
}; /**
    * Created by timur on 2/11/17.
    */

Icon.propTypes = {
  children: _react2.default.PropTypes.string.isRequired
};

exports.default = Icon;