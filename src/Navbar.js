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
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
              </button>
              {headerItems}
            </div>
          )

        default:
          return item
      }

    })

  const navBody = (
    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul className="nav navbar-nav">
        <li className="active"><a href="#">Link <span className="sr-only">(current)</span></a></li>
        <li><a href="#">Link</a></li>
        <li className="dropdown">
          <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span className="caret"></span></a>
          <ul className="dropdown-menu">
            <li><a href="#">Action</a></li>
            <li><a href="#">Another action</a></li>
            <li><a href="#">Something else here</a></li>
            <li role="separator" className="divider"/>
            <li><a href="#">Separated link</a></li>
            <li role="separator" className="divider"/>
            <li><a href="#">One more separated link</a></li>
          </ul>
        </li>
      </ul>

      <form className="navbar-form navbar-left">
        <div className="form-group">
          <input type="text" className="form-control" placeholder="Search"/>
        </div>
        <button type="submit" className="btn btn-default">Submit</button>
      </form>

      <ul className="nav navbar-nav navbar-right">
        <li><a href="#">Link</a></li>
        <li className="dropdown">
          <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span className="caret"></span></a>
          <ul className="dropdown-menu">
            <li><a href="#">Action</a></li>
            <li><a href="#">Another action</a></li>
            <li><a href="#">Something else here</a></li>
            <li role="separator" className="divider"/>
            <li><a href="#">Separated link</a></li>
          </ul>
        </li>
      </ul>
    </div>
  )

  return (
    <div className="navbar navbar-default">
      <Container fluid>
        {items}
        {navBody}
      </Container>
    </div>
  )
}

export default Navbar
