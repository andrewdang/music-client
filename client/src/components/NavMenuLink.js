import React from "react"
import PropTypes from "prop-types"
import cx from "classnames"
import { withRouter } from "react-router-dom"
import { Link } from "react-router-dom"
import styles from "../styles/NavMenuLink.module.scss"

const NavMenuLink = ({ to, text, location }) => {
  const classNames = cx(styles.link, {
    [styles.active]: to === location.pathname
  })

  return (
    <Link to={to} className={classNames}>
      {text}
    </Link>
  )
}

NavMenuLink.propTypes = {
  to: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  location: PropTypes.object.isRequired
}

export default withRouter(NavMenuLink)
