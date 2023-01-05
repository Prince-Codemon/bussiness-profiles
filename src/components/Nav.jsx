import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav>
        <ul>
            <li><Link to={'/'}> Users</Link></li>
            <li>
                <Link to={'/team'}>Team</Link>
            </li>
        </ul>
        
    </nav>
  )
}

export default Nav