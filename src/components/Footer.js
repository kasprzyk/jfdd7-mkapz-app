/**
 * Created by tomaszwojcik on 05.07.17.
 */
import React from 'react'
import './Footer.css'
import {Col} from 'react-bootstrap'
import FontAwesome from 'react-fontawesome'
import { LinkContainer } from 'react-router-bootstrap'

// PLUS BUTTON (+)
export default class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <Col xs={6} md={6}>
            <span className="allrights">2017 © MKAPZ. Wszelkie prawa zastrzeżone. </span>
          </Col>
          <Col xs={6} md={6}>
            <FontAwesome className="fa fa-facebook" size='1x' />&nbsp;&nbsp;&nbsp;&nbsp;<FontAwesome className="fa fa-twitter" size='1x' />
          </Col>
        </div>
      </footer>
    )
  }
}