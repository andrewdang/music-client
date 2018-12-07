import React from "react"
import PropTypes from "prop-types"
import styles from "../styles/BrowseLabel.module.scss"

const BrowseLabel = ({ label }) => {
  return <span className={styles.label}>{label}</span>
}

BrowseLabel.propTypes = {
  label: PropTypes.string.isRequired
}

export default BrowseLabel
