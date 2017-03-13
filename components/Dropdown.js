/**
 * Created by timur on 2/20/17.
 */

import React from 'react';
import cuid from 'cuid';
import { Link } from 'react-router';
import { itemToArray } from './utils';

var Dropdown = function Dropdown(_ref) {
  var dropup = _ref.dropup,
      children = _ref.children,
      title = _ref.title,
      right = _ref.right;


  var id = cuid();

  var items = itemToArray(children);

  var dropdownItems = items.map(function (item, i) {
    var _item$props = item.props,
        to = _item$props.to,
        href = _item$props.href;


    var dropdownItem = void 0;

    if (item.type === 'hr') {
      dropdownItem = React.createElement('li', {
        key: i,
        role: 'separator',
        className: 'divider'
      });
    } else if (item.type === 'header') {
      dropdownItem = React.createElement(
        'li',
        {
          key: i,
          className: 'dropdown-header'
        },
        item
      );
    } else if (item.props.disabled) {
      dropdownItem = React.createElement(
        'li',
        {
          key: i,
          className: 'disabled'
        },
        React.createElement(
          'a',
          null,
          item
        )
      );
    } else if (to) {
      dropdownItem = React.createElement(
        'li',
        { key: i },
        React.createElement(Link, {
          to: to,
          children: item
        })
      );
    } else {
      dropdownItem = React.createElement(
        'li',
        { key: i },
        React.createElement(
          'a',
          { href: href ? href : '#' },
          item
        )
      );
    }

    return dropdownItem;
  });

  return React.createElement(
    'div',
    { className: dropup ? 'dropup' : 'dropdown' },
    React.createElement(
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
      React.createElement('span', { className: 'caret' })
    ),
    React.createElement(
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
  children: React.PropTypes.any.isRequired
};

export default Dropdown;