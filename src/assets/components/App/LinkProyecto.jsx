import React from 'react'
import { Link } from 'react-router-dom'

export default function LinkProyecto({path, name}) {
  return (
    <li className="list-group-item">
        <Link
        to={path}
        >
            {name}
        </Link>
    </li>
  )
}
