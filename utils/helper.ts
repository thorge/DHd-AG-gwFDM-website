export function makeFirstCharUpper(val: string) {
  if (val === '') return val
  const firstChar = val.at(0)?.toLocaleUpperCase() || ''
  const otherChar = val.slice(1)
  return firstChar + otherChar
}

export function formatDate(dateString: string) {
  const date = new Date(dateString);
      // Then specify how you want your dates to be formatted
  return new Intl.DateTimeFormat('default', {dateStyle: 'long'}).format(date);
}
