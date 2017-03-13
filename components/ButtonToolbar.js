"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ButtonToolbar = function ButtonToolbar(_ref) {
  var children = _ref.children;
  return _react2.default.createElement(
    "div",
    { className: "btn-toolbar" },
    children
  );
}; /**
    * Created by timur on 3/13/17.
    */

exports.default = ButtonToolbar;