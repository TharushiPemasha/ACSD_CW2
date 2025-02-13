import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className="bg-primary">
      <div className="container">
        <h1 className="h3">
          <Link to="/" className="text-white text-decoration-none">
            Property Search
          </Link>
        </h1>
      </div>
    </header>
  )
}

export default Header

