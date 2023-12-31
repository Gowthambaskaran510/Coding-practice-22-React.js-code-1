// Write your JS code here

import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <nav className="nav-container">
    <div className="wave-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        alt="wave"
        className="wave-img"
      />
      <h1 className="wave-heading">wave</h1>
    </div>
    <ul className="nav-menu">
      <li>
        <Link className="nav-list" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="nav-list" to="/about">
          About
        </Link>
      </li>
      <li>
        <Link className="nav-list" to="/contact">
          Contact
        </Link>
      </li>
    </ul>
  </nav>
)
export default Header
