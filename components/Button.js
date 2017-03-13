'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /**
                                                                                                                                                                                                                                                                   * Created by timur on 2/11/17.
                                                                                                                                                                                                                                                                   */

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Button = function Button(props) {
  var size = props.size,
      type = props.type,
      children = props.children,
      className = props.className;

  var btnSize = size ? 'btn-' + size : ' ';
  var btnType = type ? 'btn-' + type : 'btn-default';

  return _react2.default.createElement(
    'button',
    _extends({}, props, {
      className: 'btn ' + btnSize + ' ' + btnType + ' ' + className
    }),
    children
  );
};

exports.default = Button;