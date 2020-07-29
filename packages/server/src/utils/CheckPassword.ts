import bcript from 'bcryptjs'

export default function (
  password: string,
  password_hash: string
): Promise<boolean> {
  return bcript.compare(password, password_hash)
}
