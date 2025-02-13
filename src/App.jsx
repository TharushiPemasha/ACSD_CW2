import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import SearchPage from './components/SearchPage'
import PropertyPage from './components/PropertyPage'
import FavoritesPage from './components/FavoritesPage'
import AboutPage from './components/AboutPage'
import ContactPage from './components/ContactPage'
import { FavoritesProvider } from './contexts/FavoritesContext'

function App() {
  return (
    <Router>
      <DndProvider backend={HTML5Backend}>
        <FavoritesProvider>
          <div className="d-flex flex-column min-vh-100">
            <NavBar />
            <div className="container-fluid mt-4 flex-grow-1">
              <Routes>
                <Route path="/" element={<SearchPage />} />
                <Route path="/property/:id" element={<PropertyPage />} />
                <Route path="/favorites" element={<FavoritesPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
              </Routes>
            </div>
            <Footer />
          </div>
        </FavoritesProvider>
      </DndProvider>
    </Router>
  )
}

export default App

