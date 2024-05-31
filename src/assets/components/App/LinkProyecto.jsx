import React from 'react'

export default function LinkProyecto({path, name}) {
  return (
    <li className="list-group-item">
        <a
        href={path}
        >
            {name}
        </a>
    </li>
  )
}
