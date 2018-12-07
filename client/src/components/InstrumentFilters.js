import React from "react"
import { observer, inject } from "mobx-react"
import cx from "classnames"
import styles from "../styles/filter.module.scss"

const InstrumentsFilter = ({ browseStore }) => {
  const instruments = Object.keys(browseStore.filterTypes.instruments.filters)
  const toggleMultiStateFilter = (filterType, filter) => {
    browseStore.toggleMultiStateFilter(filterType, filter)
  }

  return (
    <div className={styles.threeRowGridWrapper}>
      {instruments.map(instrument => {
        const instrumentFilterState = browseStore.filterTypes.instruments.filters[instrument]
        const classNames = cx(styles.threeRowTile, {
          [styles.applied]: instrumentFilterState === 1,
          [styles.negativeApplied]: instrumentFilterState === 2
        })

        return (
          <div
            key={instrument}
            className={classNames}
            onClick={() => toggleMultiStateFilter(browseStore.activeFilterType, instrument)}
          >
            <span>{instrument}</span>
          </div>
        )
      })}
    </div>
  )
}

export default inject("browseStore")(observer(InstrumentsFilter))
