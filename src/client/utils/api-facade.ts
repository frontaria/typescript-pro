import axios from 'axios'
import { User } from '../../shared/User'

export const fetchUsers = () =>
  axios.get(`/api/users`).then((res) => res.data as User[])
