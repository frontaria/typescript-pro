import { User } from '../shared/User'

export const users: User[] = [
  {
    imageUrl: 'some.jpg',
    userId: '1',
    firstName: 'First',
    lastName: 'User'
  },
  {
    imageUrl: 'another.jpg',
    userId: '2',
    firstName: 'Second',
    lastName: 'User'
  }
]

export function getUserById(userId: string): User {
  return users.find((u) => u.userId === userId)
}
