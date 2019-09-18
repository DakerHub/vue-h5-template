export function dictionary2entries(dictionary) {
  return Object.entries(dictionary).map(([label, value]) => ({
    label,
    value
  }))
}
