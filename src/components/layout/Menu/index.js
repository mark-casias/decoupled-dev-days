import React, { useState } from 'react'
import { FaTimes, FaBars } from 'react-icons/fa'

import Link from '../../fields/Link'
import './style.scss'

const Menu = props => {
  const [active, setActive] = useState('')

  const clickHandle = e => {
    e.preventDefault()
    if (active === 'active') {
      setActive('')
    } else setActive('active')
    console.log(active)
  }
  return (
    <>
      <button onClick={clickHandle} className={`main-menu-toggle ${active}`}>
        <span className="open">
          <FaBars />
          <span className="menu text">Menu</span>
        </span>
        <span className="close">
          <FaTimes />
          <span className="menu text">Close</span>
        </span>
      </button>
      <nav className={`main-menu ${active}`}>
        <ul className="menu">
          {/* <li><Link className="active" href="#">Sessions</Link></li> */}
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/venue">Venue</Link>
          </li>
          <li>
            <Link to="/diversity-inclusion">Diversity And Inclusion</Link>
          </li>
          <li>
            <Link to="/code-of-conduct">Code of conduct</Link>
          </li>
          <li>
            <Link to="/volunteer">Volunteer</Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Menu
