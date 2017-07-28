import React from 'react'
import { Link } from 'react-router-dom'
import './MainMenu.css'
import LogoImg from './img/LOGO_TITLE_HORIZONTAL.png';
import { LinkContainer } from 'react-router-bootstrap'
import {
  Navbar,
  Nav,
  Button,
  NavItem,
  NavDropdown,
  MenuItem
} from 'react-bootstrap'

import firebase from 'firebase'
import { connect } from 'react-redux'

import FontAwesome from 'react-fontawesome'

const menuStyle = {
  color: 'white',
};

const menuLogo = {
  height: '1.5em'
};

const menuButtonLogOut = {
  marginTop: '0.8em',
  borderRadius: '30px'
};

const menuButtonLogIn = {
  marginTop: '0.8em',
  borderRadius: '30px'
};

const loginMenu = {
  padding: '0.6em',
  height: '2.5em',
  fontSize: '12px',
};


const MainMenu = ({ user}) =>
  (
    <Navbar fixedTop>
    <Navbar.Header>
      <Navbar.Brand>
        <Link to="/"><img src={LogoImg} style={menuLogo}/></Link>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
    <Nav pullRight>
      <LinkContainer to="/kalendarz" style={menuStyle}>
        <NavItem><FontAwesome className="fa fa-calendar-o" size='1x'/></NavItem>
      </LinkContainer>
      <LinkContainer to="/detale" style={menuStyle}>
        <NavItem><FontAwesome className="fa fa-info" size='1x'/></NavItem>
      </LinkContainer>
      <LinkContainer to="/mapa" style={menuStyle}>
        <NavItem><FontAwesome className="fa fa-map-o" size='1x'/></NavItem>
      </LinkContainer>
      <LinkContainer to="/signup" style={menuStyle}>
        <NavItem><FontAwesome className="fa fa-user-plus" size='1x'/></NavItem>
      </LinkContainer>
        {user === null ?
          <Link to={'/signUp'}>
          <Button
            style = {menuButtonLogIn}
            bsStyle="success"
            bsSize="small"
          >
            Zaloguj
          </Button>
          </Link>
          :
          <Button
            style = {menuButtonLogOut}
            bsStyle="success"
            bsSize="small"
            onClick={() => firebase.auth().signOut()}>
            Wyloguj
          </Button>
          }
        </Nav>

  </Navbar.Collapse>
  </Navbar>

)

export default connect(
  state => ({
    user: state.auth.user
  })
)(MainMenu)