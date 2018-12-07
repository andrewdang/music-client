import React from "react"
import { observer, inject } from "mobx-react"
import cx from "classnames"
import styles from "../styles/filter.module.scss"

const GenreFilters = ({ browseStore }) => {
  const genres = Object.keys(browseStore.filterTypes.genres.filters)

  return (
    <div className={styles.twoRowGridWrapper}>
      {genres.map(genre => {
        const genreFilterState = browseStore.filterTypes.genres.filters[genre]
        const classNames = cx(styles.twoRowTile, {
          [styles.applied]: genreFilterState === 1,
          [styles.negativeApplied]: genreFilterState === 2
        })

        return (
          <div
            key={genre}
            className={classNames}
            onClick={() => browseStore.toggleMultiStateFilter(browseStore.activeFilterType, genre)}
          >
            <span>{genre}</span>
          </div>
        )
      })}
    </div>
  )
}

export default inject("browseStore")(observer(GenreFilters))
