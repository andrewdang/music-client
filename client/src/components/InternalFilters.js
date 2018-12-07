import React from "react"
import { observer, inject } from "mobx-react"
import styles from "../styles/filter.module.scss"
import cx from "classnames"

const InternalFilters = ({ browseStore }) => {
  const internalFilters = [{ id: 1, name: "For Marmoset" }, { id: 2, name: "Outpost" }]
  const handleToggleMultiStateFilter = (filterType, filter) => {
    browseStore.toggleMultiStateFilter(filterType, filter)
  }

  return (
    <div className={styles.filtersWrapper}>
      {internalFilters.map(filter => {
        const filterState = browseStore.filterTypes.internal.filters[filter.name]
        const classNames = cx(styles.shortTile, {
          [styles.applied]: filterState === 1,
          [styles.negativeApplied]: filterState === 2
        })

        return (
          <div
            key={filter.id}
            data-cy={`${filter.name}-filter`}
            className={classNames}
            onClick={() => handleToggleMultiStateFilter(browseStore.activeFilterType, filter.name)}
          >
            <span className={styles.labelLarge}>{filter.name}</span>
          </div>
        )
      })}
    </div>
  )
}

export default inject("browseStore")(observer(InternalFilters))
