'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Button = require('./Button');

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by timur on 3/13/17.
 */

var ButtonGroup = function ButtonGroup(_ref) {
  var children = _ref.children,
      toolbar = _ref.toolbar;
  return _react2.default.createElement(
    'div',
    { className: 'btn-group' },
    children.map(function (button, i) {
      return _react2.default.createElement(
        _Button2.default,
        { key: i },
        button.props.children
      );
    })
  );
};

exports.default = ButtonGroup;