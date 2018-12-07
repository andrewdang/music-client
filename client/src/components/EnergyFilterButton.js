import React from "react"
import PropTypes from "prop-types"
import EnergyBoltIcon from "./EnergyBoltIcon"
import styles from "../styles/EnergyFilterButton.module.scss"

const EnergyFilterButton = props => {
  const { filter, parentClasses, circleStroke, filterApplied, handleToggleFilter } = props

  return (
    <div
      key={filter.name}
      className={`${parentClasses} ${styles.tile}`}
      data-cy={`${filter.name}-filter`}
      onClick={() => handleToggleFilter("energy", filter.name)}
    >
      <figure className={styles.figure}>
        <svg className={styles.energyIcon} width="100" height="100">
          <g>
            <circle
              className={styles[filter.classOuter]}
              r="39"
              cx="50"
              cy="50"
              fill="none"
              stroke={filter.classOuter === "" ? "" : circleStroke}
            />
            <circle
              className={styles[filter.class]}
              r="32"
              cx="50"
              cy="50"
              fill="none"
              stroke={circleStroke}
            />
            <EnergyBoltIcon active={filterApplied} />
          </g>
        </svg>
        <figcaption className={styles.label}>{filter.name}</figcaption>
      </figure>
    </div>
  )
}

EnergyFilterButton.propTypes = {
  filter: PropTypes.object.isRequired,
  parentClasses: PropTypes.string.isRequired,
  circleStroke: PropTypes.string.isRequired,
  filterApplied: PropTypes.bool.isRequired,
  handleToggleFilter: PropTypes.func.isRequired
}

export default EnergyFilterButton
