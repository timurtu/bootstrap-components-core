'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Alert = function Alert(_ref) {
  var type = _ref.type,
      children = _ref.children;
  return _react2.default.createElement(
    'div',
    {
      className: 'alert alert-' + (type ? type : 'default'),
      role: 'alert'
    },
    children
  );
}; /**
    * Created by timur on 2/12/17.
    */

exports.default = Alert;