import React from "react"
import PropTypes from "prop-types"

const YesICon = ({ active }) => {
  return (
    <svg
      version="1"
      width="80"
      height="80"
      viewBox="0 0 75 75"
      aria-labelledby="customizable yes icon"
    >
      <title>Customizable Yes Icon</title>
      <path
        fill={active ? "var(--purple)" : "var(--black)"}
        d="M21 12v10h12V2H21v10zm40 8v10h12V10H61v10zM1 22v8h12V14H1v8zm40 4v12h12V14H41v12zM21 52v22h12V30H21v22zM1 50v12h12V38H1v12zm60 2v14h12V38H61v14zm-20 2v8h12V46H41v8z"
      />
    </svg>
  )
}

YesICon.defaultProps = {
  active: false
}

YesICon.propTypes = {
  active: PropTypes.bool.isRequired
}

export default YesICon
