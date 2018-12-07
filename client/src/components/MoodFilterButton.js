import React from "react"
import PropTypes from "prop-types"
import ReactResponsiveSelect from "react-responsive-select"
import styles from "../styles/MoodFilterButton.module.scss"

const MoodFilterButton = props => {
  const { whiteLeftCorner, leftCorner, rightCorner } = styles
  const {
    tileName,
    cornerText,
    active,
    selectedValue,
    setMood,
    removeMood,
    moodFilters,
    moodTileValues
  } = props

  // prevents already chosen mood from being shown again
  const updatedMoodFilters = moodFilters.filter(mf => {
    if (tileName === "isTile") {
      return ![moodTileValues[1], moodTileValues[2]].includes(mf.text)
    } else if (tileName === "andOneTile") {
      return ![moodTileValues[0], moodTileValues[2]].includes(mf.text)
    } else if (tileName === "andTwoTile") {
      return ![moodTileValues[0], moodTileValues[1]].includes(mf.text)
    } else {
      return mf
    }
  })

  const handleSetMood = selected => {
    if (selected.value !== "") setMood(selected)
  }

  return (
    <div className={`${active && tileName} moodTile`} data-cy={`${tileName}-filter`}>
      <div className={`${active ? whiteLeftCorner : leftCorner}`}>{cornerText}</div>
      {active && (
        <div className={`${rightCorner} icon-circle-x`} onClick={() => removeMood(tileName)} />
      )}

      <ReactResponsiveSelect
        name={tileName}
        options={updatedMoodFilters}
        selectedValue={selectedValue}
        onChange={selected => handleSetMood(selected)}
      />
    </div>
  )
}

MoodFilterButton.propTypes = {
  tileName: PropTypes.string.isRequired,
  cornerText: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
  setMood: PropTypes.func.isRequired,
  removeMood: PropTypes.func.isRequired,
  moodFilters: PropTypes.array.isRequired,
  moodTileValues: PropTypes.array.isRequired
}

export default MoodFilterButton
