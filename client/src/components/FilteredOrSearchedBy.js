import React, { Fragment, Component } from "react"
import { inject, observer } from "mobx-react"
import FilteredByList from "./FilteredByList"
import SearchedBy from "./SearchedBy"
import BrowseLabel from "./BrowseLabel"

class FilteredOrSearchedBy extends Component {
  componentDidUpdate(prevProps) {
    prevProps.routerStore.push({
      pathname: "/browse",
      search: "?" + this.props.browseStore.queryStrings
    })
  }

  handleRemoveFilter = (type, filter) => {
    const { browseStore } = this.props

    switch (type) {
      case "vocals":
      case "genres":
      case "instruments":
      case "internal":
        browseStore.removeMultiStateFilter(type, filter.replace(/No /g, ""))
        break
      case "mood":
        this.removeMoodFilters(filter)
        break
      case "length":
        browseStore.setLengthFilters(0, 20)
        break
      default:
        browseStore.toggleFilter(type, filter)
        break
    }
  }

  removeMoodFilters = filter => {
    const { browseStore } = this.props
    const tileNames = Object.keys(browseStore.filterTypes.mood.tiles)

    for (const tileName of tileNames) {
      if (browseStore.filterTypes.mood.tiles[tileName].value === filter) {
        browseStore.removeMoodTile(tileName)
      }
    }
  }

  displayFilterName = (type, filter) => {
    if (type === "customizable") {
      return filter === "Yes" ? "Customizable" : "Not Customizable"
    } else {
      return filter
    }
  }

  clearAllFilters = () => {
    const { browseStore } = this.props

    for (const type in browseStore.appliedFilters) {
      for (const filter of browseStore.appliedFilters[type]) {
        this.handleRemoveFilter(type, filter)
      }
    }
  }

  clearSearch = () => {
    this.props.browseStore.clearSearch()
  }

  render() {
    const { appliedFilters, appliedFilterTypes, search } = this.props.browseStore
    const { handleRemoveFilter, displayFilterName, clearAllFilters, clearSearch } = this

    return (
      <Fragment>
        {appliedFilterTypes.length > 0 && (
          <Fragment>
            <BrowseLabel label="Filtered By: " />
            <FilteredByList
              appliedFilters={appliedFilters}
              handleRemoveFilter={handleRemoveFilter}
              displayFilterName={displayFilterName}
              clearAllFilters={clearAllFilters}
            />
          </Fragment>
        )}

        {search.query !== "" && (
          <Fragment>
            <BrowseLabel label="Searched By: " />
            <SearchedBy query={search.query} clearSearch={clearSearch} />
          </Fragment>
        )}
      </Fragment>
    )
  }
}

export default inject("browseStore", "routerStore")(observer(FilteredOrSearchedBy))
