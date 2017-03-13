'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _cuid = require('cuid');

var _cuid2 = _interopRequireDefault(_cuid);

var _reactRouter = require('react-router');

var _utils = require('./utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by timur on 2/20/17.
 */

var Dropdown = function Dropdown(_ref) {
  var dropup = _ref.dropup,
      children = _ref.children,
      title = _ref.title,
      right = _ref.right;


  var id = (0, _cuid2.default)();

  var items = (0, _utils.itemToArray)(children);

  var dropdownItems = items.map(function (item, i) {
    var _item$props = item.props,
        to = _item$props.to,
        href = _item$props.href;


    var dropdownItem = void 0;

    if (item.type === 'hr') {
      dropdownItem = _react2.default.createElement('li', {
        key: i,
        role: 'separator',
        className: 'divider'
      });
    } else if (item.type === 'header') {
      dropdownItem = _react2.default.createElement(
        'li',
        {
          key: i,
          className: 'dropdown-header'
        },
        item
      );
    } else if (item.props.disabled) {
      dropdownItem = _react2.default.createElement(
        'li',
        {
          key: i,
          className: 'disabled'
        },
        _react2.default.createElement(
          'a',
          null,
          item
        )
      );
    } else if (to) {
      dropdownItem = _react2.default.createElement(
        'li',
        { key: i },
        _react2.default.createElement(_reactRouter.Link, {
          to: to,
          children: item
        })
      );
    } else {
      dropdownItem = _react2.default.createElement(
        'li',
        { key: i },
        _react2.default.createElement(
          'a',
          { href: href ? href : '#' },
          item
        )
      );
    }

    return dropdownItem;
  });

  return _react2.default.createElement(
    'div',
    { className: dropup ? 'dropup' : 'dropdown' },
    _react2.default.createElement(
      'a',
      {
        id: id,
        className: 'btn btn-default dropdown-toggle ' + (right ? 'pull-right' : ''),
        type: 'button',
        'data-toggle': 'dropdown',
        'aria-haspopup': 'true',
        'aria-expanded': 'true'
      },
      title,
      ' ',
      _react2.default.createElement('span', { className: 'caret' })
    ),
    _react2.default.createElement(
      'ul',
      {
        className: 'dropdown-menu ' + (right ? 'dropdown-menu-right' : ''),
        'aria-labelledby': id
      },
      dropdownItems
    )
  );
};
Dropdown.propTypes = {
  children: _react2.default.PropTypes.any.isRequired
};

exports.default = Dropdown;