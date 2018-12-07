import React, { Fragment } from "react"
import PropTypes from "prop-types"
import styles from "../styles/FilteredByList.module.scss"

const FilteredByList = props => {
  const { appliedFilters, handleRemoveFilter, displayFilterName, clearAllFilters } = props
  const filtersApplied = Object.keys(appliedFilters).length > 0

  return (
    <ul className={styles.filterList}>
      {Object.keys(appliedFilters).map(type => {
        return (
          <Fragment key={type}>
            {appliedFilters[type].map(filter => {
              return (
                <li
                  key={filter}
                  className={styles.name}
                  onClick={() => handleRemoveFilter(type, filter)}
                >
                  {displayFilterName(type, filter)}
                  <span className={`${styles.closeIcon} icon-x`} />
                </li>
              )
            })}
          </Fragment>
        )
      })}

      {filtersApplied && (
        <li className={`${styles.name} ${styles.clearAll}`} onClick={clearAllFilters}>
          Clear All
        </li>
      )}
    </ul>
  )
}

FilteredByList.propTypes = {
  appliedFilters: PropTypes.object.isRequired,
  handleRemoveFilter: PropTypes.func.isRequired,
  displayFilterName: PropTypes.func.isRequired,
  clearAllFilters: PropTypes.func.isRequired
}

export default FilteredByList
