import React from "react"
import { withRouter } from "react-router"
import { observer, inject } from "mobx-react"
import cx from "classnames"
import styles from "../styles/filter.module.scss"
import energyFilters from "../data/energyFilters"
import EnergyFilterButton from "./EnergyFilterButton"
import { toQueryString, appliedFiltersFor } from "../utils/router"

const EnergyFilters = ({ browseStore, routerStore }) => {
  const { location } = routerStore
  const handleToggleFilter = (filterType, filter) => {
    routerStore.push({
      pathname: "/browse",
      search: location.search + toQueryString(filterType, filter)
    })
  }

  console.log(appliedFiltersFor("energy"))

  return (
    <div className={styles.filtersWrapperRow}>
      {energyFilters.map(filter => {
        const filterApplied = browseStore.filterTypes.energy.filters[filter.name]
        const circleStroke = filterApplied ? "#8a4fab" : "#3a3532"
        const parentClasses = cx(styles.tile, {
          [styles.applied]: filterApplied
        })

        return (
          <EnergyFilterButton
            key={filter.name}
            filter={filter}
            circleStroke={circleStroke}
            parentClasses={parentClasses}
            filterApplied={filterApplied}
            handleToggleFilter={handleToggleFilter}
          />
        )
      })}
    </div>
  )
}

export default withRouter(inject("routerStore", "browseStore")(observer(EnergyFilters)))
