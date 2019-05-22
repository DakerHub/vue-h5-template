const isDev = process.env.NODE_ENV === 'development'

export default {
  // 是否开启接口mock
  mockAPI: isDev,
  // 是否开发环境
  isDev
}
