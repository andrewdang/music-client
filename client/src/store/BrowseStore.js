import { decorate, observable, action, computed } from "mobx"
import { decimalToMinutes, minutesToDecimal } from "../helpers"
import filterTypesState from "./filterTypesState"
import qs from "qs"

class BrowseStore {
  sort = { by: "default" }
  search = { query: "", by: "all" }
  filterTypes = filterTypesState

  setSearchBy(selected) {
    if (selected.altered) {
      this.search.by = selected.value
    } else {
      return false
    }
  }

  setSort(selected) {
    this.sort.by = selected.value
  }

  setSearchQuery(query) {
    this.search.query = query
  }

  clearSearch() {
    this.search.query = ""
  }

  setActiveFilterType(filterType) {
    for (const type in this.filterTypes) {
      this.filterTypes[type].active = filterType === type
    }
  }

  toggleFilter(type, filter) {
    this.filterTypes[type].filters[filter] = !this.filterTypes[type].filters[filter]
  }

  // positive/negative filtering
  // 0: neutral, 1: positive, 2: negative
  toggleMultiStateFilter(type, filter) {
    this.filterTypes[type].filters[filter] = (this.filterTypes[type].filters[filter] + 1) % 3
  }

  // one or the other filtering (e.g. customizable)
  toggleSingleFilter(type, filter) {
    for (const f in this.filterTypes[type].filters) {
      this.filterTypes[type].filters[f] = !this.filterTypes[type].filters[f] && filter === f
    }
  }

  setLengthFilters(min, max) {
    this.filterTypes.length.filters = { min, max }
  }

  setMoodTile(selected) {
    // selected is react-responsive-select obj
    if (selected.altered) {
      this.filterTypes.mood.tiles[selected.name].value = selected.value
      this.filterTypes.mood.tiles[selected.name].active = selected.value !== ""
    }
  }

  removeMultiStateFilter(type, filter) {
    this.filterTypes[type].filters[filter] = 0
  }

  removeMaleFemaleVocals() {
    this.filterTypes.vocals.filters.Male = 0
    this.filterTypes.vocals.filters.Female = 0
  }

  removeInstrumentalAndVocals() {
    this.filterTypes.vocals.filters.Instrumental = false
    this.filterTypes.vocals.filters.Vocals = false
  }

  removeMoodTile(tileName) {
    this.toggleFilter("mood", this.filterTypes.mood.tiles[tileName].value)
    const tileStates = Object.assign({}, this.filterTypes.mood.tiles)
    const tileNames = Object.keys(tileStates)

    // reset selected tile
    tileStates[tileName] = { active: false, value: "" }

    // shift all values to the left
    const tileOptionValues = tileNames
      .map(tileName => tileStates[tileName].value)
      .filter(val => val !== "")
      .concat("", "")
    const tileActiveValues = tileNames
      .map(tileName => tileStates[tileName].active)
      .filter(val => val)
      .concat(false, false)

    // assign new shifted values to new state
    const newState = tileNames.reduce((state, tileName, i) => {
      state[tileName] = {
        active: tileActiveValues[i] || false,
        value: tileOptionValues[i] || ""
      }
      return state
    }, {})

    this.filterTypes.mood.tiles = newState
  }

  syncWithQueryStrings(queryStrings) {
    const parsedQuery = qs.parse(queryStrings, { ignoreQueryPrefix: true })
    const queryKeys = Object.keys(parsedQuery)
    const filterTypes = queryKeys.filter(type => type !== "search")

    if ("search" in parsedQuery) {
      this.search = parsedQuery.search
      if (filterTypes.length === 0) return false
    }

    if (filterTypes.length === 1 && filterTypes[0] !== "vocals") {
      this.filterTypes.vocals.active = false
      this.filterTypes[filterTypes[0]].active = true
    }

    for (const type of filterTypes) {
      for (const [i, filter] of parsedQuery[type].entries()) {
        switch (type) {
          case "vocals":
            filter.includes("Male") || filter.includes("Female")
              ? this.syncMultiStateFilter(type, filter)
              : this.toggleFilter(type, filter)
            break
          case "energy":
          case "arc":
            this.toggleFilter(type, filter)
            break
          case "mood":
            this.toggleFilter(type, filter)
            this.setMoodTile({
              name: Object.keys(this.filterTypes.mood.tiles)[i],
              value: filter,
              altered: true
            })
            break
          case "length":
            const [min, max] = filter.split(" - ").map(time => minutesToDecimal(time))
            this.setLengthFilters(min, max)
            break
          case "instruments":
          case "genres":
          case "internal":
            this.syncMultiStateFilter(type, filter)
            break
          case "customizable":
            this.toggleSingleFilter(type, filter)
            break
          default:
            throw new Error(`filter ${type} does not exist`)
        }
      }
    }
  }

  syncMultiStateFilter(type, filter) {
    if (filter.includes("No ")) {
      const filterName = filter.replace("No ", "")
      this.filterTypes[type].filters[filterName] = 2
    } else {
      this.toggleMultiStateFilter(type, filter)
    }
  }

  get filterTypeStates() {
    const filterTypes = this.filterTypes
    return Object.keys(filterTypes).reduce((acc, type) => {
      acc[type] = Object.keys(filterTypes[type].filters).some(ft => {
        const state = filterTypes[type].filters[ft]
        return type === "length" ? ![0, 20].includes(state) : [true, 1, 2].includes(state)
      })
      return acc
    }, {})
  }

  get appliedFilterTypes() {
    return Object.keys(this.filterTypes).filter(type => this.filterTypeStates[type])
  }

  get activeFilterType() {
    return Object.keys(this.filterTypes).find(type => this.filterTypes[type].active)
  }

  get appliedFilters() {
    if (this.appliedFilterTypes.length < 1) return {}

    return this.appliedFilterTypes.reduce((acc, type) => {
      const filterTypeFilters = this.filterTypes[type].filters

      acc[type] = Object.keys(filterTypeFilters).filter(f => {
        return [true, 1].includes(filterTypeFilters[f])
      })

      if (["genres", "instruments", "vocals", "internal"].includes(type)) {
        const noFilters = Object.keys(filterTypeFilters)
          .filter(f => filterTypeFilters[f] === 2)
          .map(f => `No ${f}`)

        acc[type] = acc[type].concat(noFilters)
      }

      if (type === "length") {
        const min = decimalToMinutes(filterTypeFilters.min)
        const max = decimalToMinutes(filterTypeFilters.max)
        acc[type] = [`${min} - ${max}`]
      }

      return acc
    }, {})
  }

  get moodTileValues() {
    return Object.values(this.filterTypes.mood.tiles).map(tile => tile.value)
  }

  get queryStrings() {
    const searchQuery = this.search.query !== "" ? { search: this.search } : ""

    return qs.stringify({
      ...this.appliedFilters,
      ...searchQuery
    })
  }
}

decorate(BrowseStore, {
  filterTypes: observable,
  search: observable,
  sort: observable,
  setSort: action.bound,
  setSearchBy: action.bound,
  setSearchQuery: action.bound,
  clearSearch: action.bound,
  setActiveFilterType: action.bound,
  toggleFilter: action.bound,
  toggleSingleFilter: action.bound,
  toggleMultiStateFilter: action.bound,
  setLengthFilters: action.bound,
  removeMultiStateFilter: action.bound,
  removeMaleFemaleVocals: action.bound,
  removeInstrumentalAndVocals: action.bound,
  setMoodTile: action.bound,
  removeMoodTile: action.bound,
  syncWithQueryStrings: action.bound,
  syncMultiStateFilter: action.bound,
  activeFilterType: computed,
  filterTypeStates: computed,
  appliedFilterTypes: computed,
  appliedFilters: computed,
  queryStrings: computed,
  moodTileValues: computed
})

const browseStore = new BrowseStore()
export default browseStore
