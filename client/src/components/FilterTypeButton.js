import React from "react"
import PropTypes from "prop-types"
import cx from "classnames"
import styles from "../styles/FilterTypeButton.module.scss"

const FilterButton = props => {
  const { name, active, filtersApplied, setActiveFilterType } = props
  const classNames = cx(styles.btn, {
    [styles.active]: active,
    [styles.filtersApplied]: filtersApplied && !active
  })

  const displayFilterName = name => {
    switch (name) {
      case "arc":
        return "arc™"
      case "internal":
        return "M"
      default:
        return name
    }
  }

  return (
    <button
      className={classNames}
      onClick={() => setActiveFilterType(name)}
      data-cy={`${name}-filter-type`}
    >
      {displayFilterName(name)}
    </button>
  )
}

FilterButton.propTypes = {
  name: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  filtersApplied: PropTypes.bool.isRequired,
  setActiveFilterType: PropTypes.func.isRequired
}

export default FilterButton
