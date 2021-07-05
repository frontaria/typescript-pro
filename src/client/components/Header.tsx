import React from 'react'
import { Link } from 'react-router-dom'

export default () => (
  <div>
    <h1>Header</h1>
    <ul>
      <Link to="/">
        <li>home</li>
      </Link>
      <Link to="users">
        <li>users</li>
      </Link>
    </ul>
    <hr />
  </div>
)
