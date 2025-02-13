import React from 'react'
import { useDrop } from 'react-dnd'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useFavorites } from '../contexts/FavoritesContext'

function FavoritesList() {
  const { favorites, removeFromFavorites, clearFavorites } = useFavorites()

  const [, drop] = useDrop(() => ({
    accept: 'property',
    drop: () => ({ name: 'FavoritesList' }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }))

  return (
    <div ref={drop} className="favorites-list ">
      <h2>Favorites</h2>
      {favorites.map((property) => (
        <Card key={property.id} className="mb-2">
          <Card.Body>
            <Card.Title>{property.title}</Card.Title>
            <Card.Text>
              {property.type} - {property.bedrooms} bedrooms
              <br />
              Price: £{property.price.toLocaleString()}
            </Card.Text>
            <Link to={`/property/${property.id}`} className="btn">
              View
            </Link>
            <Button
              variant="danger"
              size="sm"
              onClick={() => removeFromFavorites(property.id)}
            >
              Remove
            </Button>
          </Card.Body>
        </Card>
      ))}
      {favorites.length > 0 && (
        <Button variant="warning" onClick={clearFavorites} className="mt-3">
          Clear All
        </Button>
      )}
    </div>
  )
}

export default FavoritesList

