import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import { GlobalState, GlobalStateDispatch } from '../contexts/GlobalContext'

import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Offcanvas from 'react-bootstrap/Offcanvas'

import cswdo from '../assets/images/cswdo-logo.png'



export default function Header() {
  const navigate = useNavigate()
  const state = useContext(GlobalState)

  const go_to = (e) => {
    if (e.target.id !== state.currentPage) {
      navigate(`/${e.target.id}`)
    }
  }

  const isActive = (page) => {
    return page === state.currentPage ? 'btn btn-success btn-md active text-light py-3 py-md-1 my-2 my-md-0' : 'btn btn-md py-3 py-md-1 my-2 my-md-0'
  }

  return (
    <Navbar expand='md' className='bg-success-subtle mb-3' fixed='top'>
      <div className='container'>
        <Navbar.Brand style={{ cursor: 'pointer' }} className='fw-bold'>
          <img src={cswdo} style={{ width: '1.5rem', height: '1.5rem' }} />&nbsp;
          CSWDO-SLP
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='offcanvasNavbar-expand-md' />
        <Navbar.Offcanvas
          id='offcanvasNavbar-expand-md'
          aria-labelledby='offcanvasNavbarLabel-expand-md'
          placement='end'
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id='offcanvasNavbarLabel-expand-md'>
              Sustainable Livelihood Program
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className='justify-content-end flex-grow-1 pe-3'>
              <Nav.Link id='home' className={isActive('home')} onClick={go_to}>Home</Nav.Link>
              <Nav.Link id='apply' className={isActive('apply')} onClick={go_to}>Apply</Nav.Link>
              <Nav.Link id='requirements' className={isActive('requirements')} onClick={go_to}>Requirements</Nav.Link>
              <Nav.Link id='status' className={isActive('status')} onClick={go_to}>Status</Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </div>
    </Navbar>
  )
}