import { User } from './User'

export const getUserFullName = (user: User): string =>
  `${user.firstName} ${user.lastName}`
