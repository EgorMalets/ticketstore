import React, { useContext } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import { Context } from '../index'
import { NavLink } from 'react-router-dom'
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../utils/consts'
import Container from 'react-bootstrap/Container';
import { observer } from 'mobx-react-lite'
import {useNavigate} from "react-router-dom"

const NavBar = observer(() => {
  const { user } = useContext(Context);
  const navigate = useNavigate();

  const logOut = () => {
    user.setUser({})
    user.setIsAuth(false)
  }

  return (
    <Navbar bg='dark'>
      <Container>
        <NavLink className="me-auto" style={{ color: 'white', textDecoration: "none" }} to={SHOP_ROUTE}>EventTickets</NavLink>
        {user.isAuth ?
          <Nav style={{ color: "white" }}>
            <Button variant='outline-light' onClick={() => navigate(ADMIN_ROUTE)}>Адмін панель</Button>
            <Button variant='outline-light' onClick={() => logOut()} style={{marginLeft: "10px"}}>Вийти</Button>
          </Nav>
          :
          <Nav style={{ color: "white" }}>
            <Button variant='outline-light' onClick={() => navigate(LOGIN_ROUTE)}>Авторизація</Button>
          </Nav>
        }
      </Container>
    </Navbar>
  )
})

export default NavBar;