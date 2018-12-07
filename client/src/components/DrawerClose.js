import React from "react"
import PropTypes from "prop-types"
import styles from "../styles/DrawerClose.module.scss"

const DrawerClose = ({ closeDrawer }) => {
  return (
    <div className={styles.closeBar}>
      <span className={styles.whiteRectangle} />
      <span className={`${styles.whiteIconBox} icon-cross`} onClick={closeDrawer} />
    </div>
  )
}

DrawerClose.propTypes = {
  closeDrawer: PropTypes.func.isRequired
}

export default DrawerClose
