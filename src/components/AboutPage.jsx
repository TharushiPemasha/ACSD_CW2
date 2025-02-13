import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'

function AboutPage() {
  return (
    <Container className="my-5">
      <Row>
        <Col>
          <h1 className="mb-4">About Heavenly Homes</h1>
          <Card>
            <Card.Body className='card-b'>
              <p>
              Heavenly Homes is your go-to platform for finding the perfect property. Whether you're looking for a cozy apartment or a spacious family home, we've got you covered.
              </p>
              <p>
                Our mission is to simplify the property search process, providing you with a user-friendly interface and powerful search tools to help you find your dream home quickly and easily.
              </p>
              <h2 className="h4 mt-4">Key Features:</h2>
              <ul>
                <li>Advanced search filters to narrow down your options</li>
                <li>Detailed property listings with high-quality images</li>
                <li>Save your favorite properties for later viewing</li>
                <li>Up-to-date information on property prices and availability</li>
                <li>User-friendly interface for seamless navigation</li>
              </ul>
              <p>
                Start your property search journey with Heavenly Homes today and discover the home you've always dreamed of!
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default AboutPage

