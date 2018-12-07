import React from "react"
import { observer, inject } from "mobx-react"
import cx from "classnames"
import vocalFilters from "../data/vocalFilters"
import styles from "../styles/filter.module.scss"
import vstyles from "../styles/VocalFilters.module.scss"

const VocalFilters = ({ browseStore }) => {
  const handleVocalFilterToggle = (filterType, filter) => {
    if (["Male", "Female"].includes(filter)) {
      browseStore.toggleMultiStateFilter(filterType, filter)
      browseStore.removeInstrumentalAndVocals()
    } else {
      if (["Instrumental", "Vocals"].includes(filter)) browseStore.removeMaleFemaleVocals()
      browseStore.toggleFilter(filterType, filter)
      toggleOppositeFilter(filterType, filter)
    }
  }

  const toggleOppositeFilter = (filterType, filter) => {
    const oppositeFilter = filter === "Vocals" ? "Instrumental" : "Vocals"
    if (
      browseStore.appliedFilters.vocals &&
      browseStore.appliedFilters.vocals.includes(oppositeFilter)
    ) {
      browseStore.toggleFilter(filterType, oppositeFilter)
    }
  }

  return (
    <div className={styles.filtersWrapper}>
      {vocalFilters.map(filter => {
        const vocalFilterState = browseStore.filterTypes.vocals.filters[filter.name]
        const classNames = cx(styles.tile, vstyles.tile, {
          [styles.applied]: [1, true].includes(vocalFilterState),
          [styles.negativeApplied]: vocalFilterState === 2
        })

        return (
          <div
            key={filter.name}
            className={classNames}
            data-cy={`${filter.name}-filter`}
            onClick={() => handleVocalFilterToggle(browseStore.activeFilterType, filter.name)}
          >
            <figure className={`${styles.figure} ${vstyles.icon}`}>
              <div
                className={`icon-${filter.icon} ${vstyles.vocalType}`}
                style={{ marginRight: `${filter.marginRight}` }}
              />
              <div className={`icon-mic ${vstyles.mic}`} />
            </figure>

            <figcaption className={styles.labelLarge}>{filter.name}</figcaption>
          </div>
        )
      })}
    </div>
  )
}

export default inject("browseStore")(observer(VocalFilters))
