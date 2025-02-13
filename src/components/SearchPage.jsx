import React, { useState, useEffect } from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import PropertyList from './PropertyList'
import propertiesData from '../data/properties.json'

function SearchPage() {
  const [properties, setProperties] = useState([])
  const [searchCriteria, setSearchCriteria] = useState({
    type: 'any',
    minPrice: '',
    maxPrice: '',
    minBedrooms: '',
    maxBedrooms: '',
    dateAddedAfter: null,
    dateAddedBefore: null,
    postcodeArea: '',
  })

  useEffect(() => {
    setProperties(propertiesData)
  }, [])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setSearchCriteria({ ...searchCriteria, [name]: value })
  }

  const handleDateChange = (date, name) => {
    setSearchCriteria({ ...searchCriteria, [name]: date })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const filteredProperties = propertiesData.filter((property) => {
      if (searchCriteria.type !== 'any' && property.type !== searchCriteria.type) {
        return false
      }
      if (searchCriteria.minPrice && property.price < parseInt(searchCriteria.minPrice)) {
        return false
      }
      if (searchCriteria.maxPrice && property.price > parseInt(searchCriteria.maxPrice)) {
        return false
      }
      if (searchCriteria.minBedrooms && property.bedrooms < parseInt(searchCriteria.minBedrooms)) {
        return false
      }
      if (searchCriteria.maxBedrooms && property.bedrooms > parseInt(searchCriteria.maxBedrooms)) {
        return false
      }
      if (searchCriteria.dateAddedAfter && new Date(property.dateAdded) < searchCriteria.dateAddedAfter) {
        return false
      }
      if (searchCriteria.dateAddedBefore && new Date(property.dateAdded) > searchCriteria.dateAddedBefore) {
        return false
      }
      if (searchCriteria.postcodeArea && !property.postcode.startsWith(searchCriteria.postcodeArea.toUpperCase())) {
        return false
      }
      return true
    })
    setProperties(filteredProperties)
  }

  return (
    <div className="search-page">
      <Form onSubmit={handleSubmit} className="mb-4">
        <Row>
          <Col md={3}>
            <Form.Group controlId="type">
              <Form.Label>Property Type</Form.Label>
              <Form.Select name="type" value={searchCriteria.type} onChange={handleInputChange}>
                <option value="any">Any</option>
                <option value="house">House</option>
                <option value="flat">Flat</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group controlId="minPrice">
              <Form.Label>Min Price</Form.Label>
              <Form.Control
                type="number"
                name="minPrice"
                value={searchCriteria.minPrice}
                onChange={handleInputChange}
                placeholder="Min Price"
              />
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group controlId="maxPrice">
              <Form.Label>Max Price</Form.Label>
              <Form.Control
                type="number"
                name="maxPrice"
                value={searchCriteria.maxPrice}
                onChange={handleInputChange}
                placeholder="Max Price"
              />
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group controlId="minBedrooms">
              <Form.Label>Min Bedrooms</Form.Label>
              <Form.Control
                type="number"
                name="minBedrooms"
                value={searchCriteria.minBedrooms}
                onChange={handleInputChange}
                placeholder="Min Bedrooms"
              />
            </Form.Group>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col md={3}>
            <Form.Group controlId="maxBedrooms">
              <Form.Label>Max Bedrooms</Form.Label>
              <Form.Control
                type="number"
                name="maxBedrooms"
                value={searchCriteria.maxBedrooms}
                onChange={handleInputChange}
                placeholder="Max Bedrooms"
              />
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group controlId="dateAddedAfter">
              <Form.Label>Date Added After</Form.Label>
              <DatePicker
                selected={searchCriteria.dateAddedAfter}
                onChange={(date) => handleDateChange(date, 'dateAddedAfter')}
                className="form-control"
                placeholderText="Select date"
              />
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group controlId="dateAddedBefore">
              <Form.Label>Date Added Before</Form.Label>
              <DatePicker
                selected={searchCriteria.dateAddedBefore}
                onChange={(date) => handleDateChange(date, 'dateAddedBefore')}
                className="form-control"
                placeholderText="Select date"
              />
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group controlId="postcodeArea">
              <Form.Label>Postcode Area</Form.Label>
              <Form.Control
                type="text"
                name="postcodeArea"
                value={searchCriteria.postcodeArea}
                onChange={handleInputChange}
                placeholder="e.g. BR1, NW1"
              />
            </Form.Group>
          </Col>
        </Row>
        <Button variant="primary" type="submit" className="mt-3">
          Search
        </Button>
      </Form>
      <PropertyList properties={properties} />
    </div>
  )
}

export default SearchPage

