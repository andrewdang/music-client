export const range = n => [...Array(n).keys()]

export const stripProtocol = url => url.replace(/(^\w+:|^)\/\//, "")

export const humanizeCamelCase = word => word.replace(/([a-z])([A-Z])/g, "$1 $2")

export const decimalToMinutes = decimal => {
  const abs = Math.abs(decimal)
  const min = Math.floor(abs)
  const sec = Math.floor((abs * 60) % 60)
  return `${min}:${sec < 10 ? "0" : ""}${sec}`
}

export const minutesToDecimal = time => {
  const hoursMinutes = time.split(/[.:]/)
  const hours = parseInt(hoursMinutes[0], 10)
  const minutes = hoursMinutes[1] ? parseInt(hoursMinutes[1], 10) : 0
  return hours + minutes / 60
}
