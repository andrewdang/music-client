import React from "react"
import PropTypes from "prop-types"

const NoIcon = ({ active }) => {
  return (
    <svg
      version="1"
      width="88.667"
      height="63.333"
      viewBox="0 0 74 55"
      aria-labelledby="customizable no icon"
    >
      <title>Customizable No Icon</title>
      <path
        fill={active ? "var(--purple)" : "var(--black)"}
        d="M1 12v11h12V1H1v11zm20 0v11h12V1H21v11zm20 0v11h12V1H41v11zm20 0v11h12V1H61v11zM1 42v11h12V31H1v11zm20 0v11h12V31H21v11zm20 0v11h12V31H41v11zm20 0v11h12V31H61v11z"
      />
    </svg>
  )
}

NoIcon.defaultProps = {
  active: false
}

NoIcon.propTypes = {
  active: PropTypes.bool.isRequired
}

export default NoIcon
