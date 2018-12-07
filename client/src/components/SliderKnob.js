import React from "react"
import PropTypes from "prop-types"
import styles from "../styles/SliderKnob.module.scss"

const SliderKnob = ({ children }) => {
  return <div className={styles.knob}>{children}</div>
}

SliderKnob.propTypes = {
  children: PropTypes.string.isRequired
}

export default SliderKnob
