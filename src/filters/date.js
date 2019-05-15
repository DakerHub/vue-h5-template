import dayjs from 'dayjs'

export default function (value, formatter = 'YYYY-MM-DD') {
  if (value === undefined || value === null || value === '') return

  const date = dayjs(value)
  return date.isValid() ? date.format(formatter) : ''
}
