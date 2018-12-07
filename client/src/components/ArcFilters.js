import React from "react"
import { observer, inject } from "mobx-react"
import cx from "classnames"
// import styles from "../styles/ArcFilters.module.scss";
import fstyles from "../styles/filter.module.scss"

const ArcFilters = ({ browseStore }) => {
  const arcFilters = Object.keys(browseStore.filterTypes["arc"].filters)
  const handleToggleFilter = (filterType, filter) => {
    browseStore.toggleFilter(filterType, filter)
  }

  return (
    <div className={fstyles.filtersWrapper}>
      {arcFilters.map(filter => {
        const classNames = cx(fstyles.shortTile, {
          [fstyles.applied]: browseStore.filterTypes["arc"].filters[filter]
        })

        return (
          <div
            key={filter}
            className={classNames}
            onClick={() => handleToggleFilter(browseStore.activeFilterType, filter)}
          >
            <span>{filter}</span>
          </div>
        )
      })}
    </div>
  )
}

export default inject("browseStore")(observer(ArcFilters))
