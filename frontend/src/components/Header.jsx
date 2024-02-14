import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { GlobalState, GlobalStateDispatch } from '../contexts/GlobalContext'

import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Offcanvas from 'react-bootstrap/Offcanvas'

import cswdo from '../assets/images/cswdo-logo.png'



export default function Header() {
  const [show, setShow] = useState(false)

  const navigate = useNavigate()
  const state = useContext(GlobalState)

  const handleShow = () => setShow(true)
  const handleClose = () => setShow(false)

  const go_to = (e) => {
    if (e.target.id !== state.currentPage) {
      navigate(`/${e.target.id}`)
      handleClose()
    }
  }

  const isActive = (page) => {
    return page === state.currentPage ? 'btn btn-success btn-md active text-light py-3 py-md-1 my-2 my-md-0 ps-4 ps-md-1 text-start fw-bold' : 'btn btn-md py-3 py-md-1 my-2 my-md-0 ps-4 ps-md-1 text-start'
  }

  return (
    <Navbar expand='md' className='bg-success-subtle mb-3' fixed='top'>
      <div className='container'>
        <Navbar.Brand style={{ cursor: 'pointer' }} className='fw-bold'>
          <img src={cswdo} style={{ width: '1.5rem', height: '1.5rem' }} />&nbsp;
          CSWDO-SLP
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='offcanvasNavbar-expand-md' onClick={handleShow} />
        <Navbar.Offcanvas
          id='offcanvasNavbar-expand-md'
          aria-labelledby='offcanvasNavbarLabel-expand-md'
          placement='end'
          show={show}
          onHide={handleClose}
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id='offcanvasNavbarLabel-expand-md'>
              Sustainable Livelihood Program
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className='justify-content-end flex-grow-1 pe-3'>
              <Nav.Link id='home' className={isActive('home')} onClick={go_to}><i className='bi bi-house-fill d-md-none' />&nbsp;Home</Nav.Link>
              <Nav.Link id='apply' className={isActive('apply')} onClick={go_to}><i className='bi bi-envelope-paper d-md-none' />&nbsp;Apply</Nav.Link>
              <Nav.Link id='requirements' className={isActive('requirements')} onClick={go_to}><i className='bi bi-card-heading d-md-none' />&nbsp;Requirements</Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </div>
    </Navbar>
  )
}