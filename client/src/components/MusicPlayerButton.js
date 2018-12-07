import React from "react"
import PropTypes from "prop-types"
import styles from "../styles/MusicPlayerButton.module.scss"

const MusicPlayerButton = props => {
  const { iconName, active, panelName, togglePanel, label, showLabel, hideLabel } = props

  return (
    <div
      className={`${styles.iconBtn} icon-${iconName} ${active ? styles.active : ""}`}
      onClick={() => togglePanel(panelName)}
      onMouseOver={() => showLabel(label)}
      onMouseOut={() => hideLabel()}
    />
  )
}

MusicPlayerButton.defaultProps = {
  showLabel: () => false,
  hideLabel: () => false,
  togglePanel: () => false,
  active: false
}

MusicPlayerButton.propTypes = {
  showLabel: PropTypes.func.isRequired,
  hideLabel: PropTypes.func.isRequired,
  togglePanel: PropTypes.func,
  label: PropTypes.string,
  iconName: PropTypes.string.isRequired,
  panelName: PropTypes.string,
  active: PropTypes.bool.isRequired
}

export default MusicPlayerButton
