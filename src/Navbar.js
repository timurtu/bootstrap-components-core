/**
 * Created by timur on 5/1/17.
 */

import React from 'react'
import Container from './Container'

const Navbar = ({ children }) => {

  const items = []
    .concat(children)
    .map((item, i) => {

      switch (item.type) {

        case 'header':

          const headerItems = [].concat(item.props.children)
            .map((itemChild, j) => {

              switch (itemChild.type) {

                case 'brand':
                  return (
                    <a
                      key={j}
                      href={`${itemChild.props.href ? itemChild.props.href : '#'}`}
                      className="navbar-brand"
                    >
                      {itemChild.props.children}
                    </a>
                  )

                default:
                  return itemChild
              }
            })

          return (
            <div
              key={i}
              className="navbar-header"
            >
              <button
                type="button"
                className="navbar-toggle collapsed"
                data-toggle="collapse"
                data-target="#bs-example-navbar-collapse-1"
                aria-expanded="false"
              >
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar" />
                <span class="icon-bar" />
                <span class="icon-bar" />
              </button>
              {headerItems}
            </div>
          )

        default:
          return item
      }

    })

  return (
    <div className="navbar navbar-default">
      <Container fluid>
        {items}
      </Container>
    </div>
  )
}

export default Navbar
