var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

/**
 * Created by timur on 3/10/17.
 */

import React from 'react';
import { itemToArray } from './utils';

var Grid = function Grid(props) {
  var children = props.children;

  // Rows are the immediate children of the grid

  var rows = itemToArray(children);

  var grid = rows.map(function (row, y) {

    // Columns are grandchildren of the grid
    var cols = itemToArray(row.props.children);

    return React.createElement(
      'div',
      _extends({}, row.props, {
        key: y,
        className: 'row'
      }),
      cols.map(function (col, x) {

        // return a clearfix element instead when defined
        if (col.type === 'clearfix') {
          // construct a className based on what needs to be cleared
          var className = Object.keys(col.props).filter(function (prop) {
            return prop !== 'children';
          }).map(function (prop) {
            return 'visible-' + prop + '-block';
          });

          return React.createElement('div', {
            key: x,
            className: 'clearfix ' + className
          });
        }

        // transform a components props into a className
        var displayString = Object.keys(col.props).filter(function (prop) {
          return prop !== 'children';
        })
        // make sure this only selects the single display
        // props apart from the offsets and others
        .filter(function (prop) {
          return prop.length < 3;
        })
        // return each column prop's value as a separate class
        .map(function (prop) {
          return 'col-' + prop + '-' + col.props[prop];
        }).join(' ');

        var offsetString = Object.keys(col.props).filter(function (prop) {
          return prop !== 'children';
        })
        // select defined offset props
        .filter(function (prop) {
          return prop.slice(2, prop.length).toLowerCase() === 'offset';
        })
        // turn them into offset divs
        .map(function (prop) {
          return 'col-' + prop.slice(0, 2) + '-offset-' + col.props[prop];
        }).join(' ');

        // Create a separate list of props to pass down to avoid
        // duplicate props declarations
        var colPassDownProps = Object.keys(col.props)
        // ignore props we're using because
        // they shouldn't get passed down
        .filter(function (prop) {
          return prop !== 'xs' && prop !== 'sm' && prop !== 'md' && prop !== 'lg' && prop !== 'xsOffset' && prop !== 'smOffset' && prop !== 'mdOffset' && prop !== 'lgOffset';
        })

        // Create a new object containing each prop and contents
        .reduce(function (passDownProps, prop) {

          // extract each prop's contents
          var newProp = {};
          newProp[prop] = col.props[prop];

          return Object.assign({}, passDownProps, newProp);
        }, {});

        return React.createElement('div', _extends({
          key: x,
          className: (displayString + ' ' + offsetString).trim()
        }, colPassDownProps));
      })
    );
  });

  return React.createElement(
    'div',
    props,
    grid
  );
};

export default Grid;