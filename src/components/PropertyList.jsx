import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Row, Col } from 'react-bootstrap'
import { useDrag } from 'react-dnd'
import { useFavorites } from '../contexts/FavoritesContext'

function PropertyCard({ property }) {
  const { addToFavorites } = useFavorites()
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'property',
    item: { id: property.id },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult()
      if (item && dropResult) {
        addToFavorites(property)
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }))

  return (
    <Card
      ref={drag}
      style={{ opacity: isDragging ? 0.5 : 1, cursor: 'move' }}
      className="mb-4 h-100"
    >
      <Card.Img variant="top" src={property.images[0]} alt={property.title} />
      <Card.Body>
        <Card.Title>{property.title}</Card.Title>
        <Card.Text>
          {property.type} - {property.bedrooms} bedrooms
          <br />
          Price: £{property.price.toLocaleString()}
          <br />
          {property.postcode}
        </Card.Text>
        <Link to={`/property/${property.id}`} className="btn btn-primary">
          View Details
        </Link>
      </Card.Body>
    </Card>
  )
}

function PropertyList({ properties }) {
  return (
    <Row xs={1} md={2} lg={3} className="g-4">
      {properties.map((property) => (
        <Col key={property.id}>
          <PropertyCard property={property} />
        </Col>
      ))}
    </Row>
  )
}

export default PropertyList

