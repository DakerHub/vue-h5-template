const isDev = process.env.NODE_ENV === 'development'

export default {
  mockAPI: isDev,
  isDev
}
