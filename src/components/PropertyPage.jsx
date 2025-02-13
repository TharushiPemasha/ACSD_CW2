import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Container, Row, Col, Image, Tab, Tabs } from 'react-bootstrap'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'
import ImageGallery from 'react-image-gallery'
import 'react-image-gallery/styles/css/image-gallery.css'
import propertiesData from '../data/properties.json'
import { useFavorites } from '../contexts/FavoritesContext'

function PropertyPage() {
  const { id } = useParams()
  const [property, setProperty] = useState(null)
  const { addToFavorites, removeFromFavorites, favorites } = useFavorites()
  const isFavorite = favorites.some((fav) => fav.id === parseInt(id))

  useEffect(() => {
    const foundProperty = propertiesData.find((p) => p.id === parseInt(id))
    setProperty(foundProperty)
  }, [id])

  if (!property) {
    return <div>Loading...</div>
  }

  const images = property.images.map((image) => ({
    original: image,
    thumbnail: image,
  }))

  const mapContainerStyle = {
    width: '100%',
    height: '400px',
  }

  const center = {
    lat: property.latitude,
    lng: property.longitude,
  }

  const handleFavoriteToggle = () => {
    if (isFavorite) {
      removeFromFavorites(property.id)
    } else {
      addToFavorites(property)
    }
  }

  return (
    <Container>
      <Row className="mb-4">
        <Col>
          <h1>{property.title}</h1>
          <p>
            {property.type} - {property.bedrooms} bedrooms - £
            {property.price.toLocaleString()}
          </p>
          <p>{property.postcode}</p>
          <button
            className={`btn ${isFavorite ? 'btn-danger' : 'btn-primary'}`}
            onClick={handleFavoriteToggle}
          >
            {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
          </button>
        </Col>
      </Row>
      <Row className="mb-4">
        <Col>
          <ImageGallery items={images} />
        </Col>
      </Row>
      <Row>
        <Col>
          <Tabs defaultActiveKey="description" id="property-tabs" className="mb-3">
            <Tab eventKey="description" title="Description">
              <p>{property.description}</p>
            </Tab>
            <Tab eventKey="floorplan" title="Floor Plan">
              <Image src={property.floorPlan} alt="Floor Plan" fluid />
            </Tab>
            <Tab eventKey="map" title="Map">
              <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
                <GoogleMap
                  mapContainerStyle={mapContainerStyle}
                  center={center}
                  zoom={15}
                >
                  <Marker position={center} />
                </GoogleMap>
              </LoadScript>
            </Tab>
          </Tabs>
        </Col>
      </Row>
    </Container>
  )
}

export default PropertyPage

