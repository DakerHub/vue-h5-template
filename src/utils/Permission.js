export default class Permission {
  static config = {}
  static configure(config) {
    assert(config.isFreeRoute, 'function')
    assert(config.isUserLoaded, 'function')
    assert(config.loadUser, 'function')
    assert(config.hasAuth, 'function')
    assert(config.noAuthRedirect, 'string')
    assert(config.noUserRedirect, 'string')
    Object.assign(this.config, config)
  }

  static async interceptor(to, from, next) {
    if (this.config.isFreeRoute(to, from)) {
      return next()
    }

    let loadSuccessfully = true
    if (!this.config.isUserLoaded()) {
      loadSuccessfully = await this.config.loadUser()
    }

    if (loadSuccessfully) {
      if (this.config.hasAuth(to, from)) {
        return next()
      }

      return next(this.config.noAuthRedirect)
    }

    next(this.config.noUserRedirect)
  }
}

function assert(target, type) {
  /* eslint-disable valid-typeof */
  if (typeof target !== type) {
    throw new TypeError('[Permission.configure] 参数错误')
  }
}
