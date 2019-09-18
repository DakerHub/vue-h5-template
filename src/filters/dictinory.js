import * as dictinory from '@/utils/constants'
import config from '@/config'

export default function(value, dictinoryName) {
  if (!dictinory.hasOwnProperty(dictinoryName)) {
    throw new Error(`[filter: dictinory] 没有"${dictinoryName}"字典`)
  }

  const dict = dictinory[dictinoryName]

  const target = Object.entries(dict).find(([key, val]) => value === val)

  return target ? target[0] : config.emptyText
}
