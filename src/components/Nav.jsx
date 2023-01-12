import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Nav = () => {
  const {team} = useSelector(state => state)
  const teamCount = team.length

  return (
    <nav>
        <ul>
            <li><Link to={'/'}> Users</Link></li>
            <li>
                <Link to={'/team'}>Team </Link>
                <span>{teamCount}</span>
            </li>
        </ul>
        
    </nav>
  )
}

export default Nav