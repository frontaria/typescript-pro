import React, { useState, useEffect } from 'react'
import { fetchUsers } from '../utils/api-facade'
import { User } from '../../shared/User'
import { getUserFullName } from '../../shared/utils'

export default () => {
  const [users, setUsers] = useState([] as User[])

  useEffect(() => {
    fetchUsers().then((data) => {
      setUsers(data)
    })
  }, [])

  return (
    <div>
      <h2>Users page</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{getUserFullName(user)}</li>
        ))}
      </ul>
    </div>
  )
}
