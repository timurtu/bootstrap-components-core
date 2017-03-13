/**
 * Created by timur on 3/10/17.
 */

import React from 'react'
import { itemToArray } from './utils'

const Grid = props => {

  const { children } = props

  // Rows are the immediate children of the grid
  const rows = itemToArray(children)

  const grid = rows.map((row, y) => {

    // Columns are grandchildren of the grid
    const cols = itemToArray(row.props.children)

    return (
      <div
        {...row.props}
        key={y}
        className="row"
      >
        {cols.map((col, x) => {

          // return a clearfix element instead when defined
          if (col.type === 'clearfix') {
            // construct a className based on what needs to be cleared
            const className = Object.keys(col.props)
              .filter(prop => prop !== 'children')
              .map(prop => `visible-${prop}-block`)

            return (
              <div
                key={x}
                className={`clearfix ${className}`}
              />
            )
          }

          // transform a components props into a className
          const displayString = Object.keys(col.props)
            .filter(prop => prop !== 'children')
            // make sure this only selects the single display
            // props apart from the offsets and others
            .filter(prop => prop.length < 3)
            // return each column prop's value as a separate class
            .map(prop => `col-${prop}-${col.props[prop]}`)
            .join(' ')

          const offsetString = Object.keys(col.props)
            .filter(prop => prop !== 'children')
            // select defined offset props
            .filter(prop => prop.slice(2, prop.length).toLowerCase() === 'offset')
            // turn them into offset divs
            .map(prop => `col-${prop.slice(0, 2)}-offset-${col.props[prop]}`)
            .join(' ')

          // Create a separate list of props to pass down to avoid
          // duplicate props declarations
          const colPassDownProps = Object.keys(col.props)
          // ignore props we're using because
          // they shouldn't get passed down
            .filter(prop =>
              prop !== 'xs' &&
              prop !== 'sm' &&
              prop !== 'md' &&
              prop !== 'lg' &&
              prop !== 'xsOffset' &&
              prop !== 'smOffset' &&
              prop !== 'mdOffset' &&
              prop !== 'lgOffset'
            )

            // Create a new object containing each prop and contents
            .reduce((passDownProps, prop) => {

              // extract each prop's contents
              const newProp = {}
              newProp[prop] = col.props[prop]

              return Object.assign({}, passDownProps, newProp)
            }, {})

          return (
            <div
              key={x}
              className={`${displayString} ${offsetString}`.trim()}
              {...colPassDownProps}
            />
          )
        })}
      </div>
    )
  })

  return (
    <div {...props}>
      {grid}
    </div>
  )
}

export default Grid
