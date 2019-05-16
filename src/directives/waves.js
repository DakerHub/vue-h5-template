// http://fian.my.id/Waves/#api
import Waves from 'node-waves'
import 'node-waves/dist/waves.css'

export default {
  inserted: function (el, arg) {
    console.log(arg)
    const config = {
      duration: 500,
      delay: 0
    }
    Waves.attach(el, arg.value)
    Waves.init(config)
  }
}
