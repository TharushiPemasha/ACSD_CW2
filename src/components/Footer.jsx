import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className=" text-light py-4 mt-5">
      <Container>
        <Row>
          <Col md={6} className="mb-3 mb-md-0">
            <h3>Heavenly Homes.</h3>
            <p className="mb-0">A haven for your dream home.</p>
          </Col>
          <Col md={3}>
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><Link to="/" className="text-light">Home</Link></li>
              <li><Link to="/favorites" className="text-light">Favorites</Link></li>
              <li><Link to="/about" className="text-light">About</Link></li>
              <li><Link to="/contact" className="text-light">Contact</Link></li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>Contact Us</h5>
            <address>
              <p className="mb-0">123 Property Street</p>
              <p className="mb-0">City, State 12345</p>
              <p className="mb-0">Email: info@propertyfinder.com</p>
              <p className="mb-0">Phone: (123) 456-7890</p>
            </address>
          </Col>
        </Row>
        <hr className="my-4" />
        <Row>
          <Col className="text-center">
            <p className="mb-0">&copy; {currentYear} Heavenly Homes. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer

