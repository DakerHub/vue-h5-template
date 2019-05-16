export default function toThousandFilter(num, prefix = '¥') {
  let numFormatted = ''

  const cent = num % 100
  const integer = Number.parseInt(num / 100)

  const integerSplitted = (+integer || 0).toString().replace(/^-?\d+/g, m => m.replace(/(?=(?!\b)(\d{3})+$)/g, ','))

  numFormatted = `${prefix}${integerSplitted}.${cent.toString().padEnd(2, '0')}`

  return numFormatted
}
