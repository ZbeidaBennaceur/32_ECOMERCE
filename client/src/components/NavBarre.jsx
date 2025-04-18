import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../JS/actions/auth.Action'

const NavBarre = () => {
  const isAuth = useSelector(state => state.authReducer.isAuth)
  const user = useSelector(state => state.authReducer.user)
  const dispatch = useDispatch()
  return (
    <div>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">TheShopping</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">All products</Nav.Link>
            {isAuth ? (
              <>
                <Nav.Link href="/profile">{`${user.name}'s articles`}</Nav.Link>
                <Nav.Link href="/# " onClick={() => dispatch(logout())}>logout</Nav.Link>
              </>) : (
              <>
                <Nav.Link href="/login">Login</Nav.Link>

                <Nav.Link href="/register">Register</Nav.Link>

              </>
            )}
            {user.isAdmin && (
              <Nav.Link href="/admin">Dashboard</Nav.Link>
            )}
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavBarre
