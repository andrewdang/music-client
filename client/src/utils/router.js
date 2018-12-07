import qs from "qs"

export const toQueryString = (filterType, filter) => {
  const search = window.location.search
  const addQueryPrefix = search === ""
  const queryString = qs.stringify(
    {
      [filterType]: filter
    },
    { addQueryPrefix }
  )

  return addQueryPrefix ? queryString : "&" + queryString
}

export const appliedFiltersFor = filterType => {
  const parsedQuery = qs.parse(window.location.search, { ignoreQueryPrefix: true })
  return parsedQuery[filterType] || []
}
