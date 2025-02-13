import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import PropertyList from './PropertyList'
import { useFavorites } from '../contexts/FavoritesContext'

function FavoritesPage() {
  const { favorites } = useFavorites()

  return (
    <Container>
      <h1 className="my-4">Favorites</h1>
      {favorites.length > 0 ? (
        <PropertyList properties={favorites} />
      ) : (
        <p>You haven't added any properties to your favorites yet.</p>
      )}
    </Container>
  )
}

export default FavoritesPage

