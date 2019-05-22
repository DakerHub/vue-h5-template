export default class Permission {
  static config = {}
  static configure(config) {
    assert(config, 'isFreeRoute', 'function')
    assert(config, 'isUserLoaded', 'function')
    assert(config, 'loadUser', 'function')
    assert(config, 'hasAuth', 'function')
    assert(config, 'onNoAuth', 'function')
    assert(config, 'onNoUser', 'function')
    Object.assign(this.config, config)
  }

  static async interceptor(to, from, next) {
    if (await this.config.isFreeRoute(to, from)) {
      return next()
    }

    let loadUserOK = true
    if (!await this.config.isUserLoaded()) {
      loadUserOK = await this.config.loadUser()
    }

    if (loadUserOK) {
      if (await this.config.hasAuth(to, from)) {
        return next()
      }

      await this.config.onNoAuth(to, from, next)

      return
    }

    return this.config.onNoUser(to, from, next)
  }
}

function assert(config, key, type) {
  const value = config[key]
  /* eslint-disable valid-typeof */
  if (!value) {
    throw new Error(`[Permission.configure] 缺少参数 ${key}`)
  }

  if (typeof value !== type) {
    throw new TypeError(`[Permission.configure] ${key} 类型应该是 ${type}`)
  }
}
