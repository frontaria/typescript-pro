import { User } from '../shared/User'

export const users: User[] = [
  {
    imageUrl: 'some.jpg',
    id: '1',
    firstName: 'First',
    lastName: 'User'
  },
  {
    imageUrl: 'another.jpg',
    id: '2',
    firstName: 'Second',
    lastName: 'User'
  }
]

export function getUserById(id: string): User {
  return users.find((u) => u.id === id)
}
