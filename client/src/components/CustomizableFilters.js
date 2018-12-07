import React from "react"
import { observer, inject } from "mobx-react"
import YesIcon from "./YesIcon"
import NoIcon from "./NoIcon"
import styles from "../styles/filter.module.scss"
import cx from "classnames"

const CustomizableFilters = ({ browseStore }) => {
  const customizableFilters = [{ key: 1, name: "Yes" }, { key: 2, name: "No" }]

  const handleToggleSingleFilter = (filterType, filter) => {
    browseStore.toggleSingleFilter(filterType, filter)
  }

  return (
    <div className={styles.filtersWrapper}>
      {customizableFilters.map(filter => {
        const filterApplied = browseStore.filterTypes.customizable.filters[filter.name]
        const classNames = cx(styles.tile, {
          [styles.applied]: filterApplied
        })

        return (
          <div
            key={filter.key}
            data-cy={`${filter.name}-filter`}
            className={classNames}
            onClick={() => handleToggleSingleFilter(browseStore.activeFilterType, filter.name)}
          >
            <figure className={styles.figure}>
              {filter.name === "Yes" ? (
                <YesIcon active={filterApplied} />
              ) : (
                <NoIcon active={filterApplied} />
              )}
            </figure>
            <figcaption className={styles.labelLarge}>{filter.name}</figcaption>
          </div>
        )
      })}
    </div>
  )
}

export default inject("browseStore")(observer(CustomizableFilters))
