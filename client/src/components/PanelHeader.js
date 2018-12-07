import React from "react"
import PropTypes from "prop-types"
import { inject, observer } from "mobx-react"
import styles from "../styles/panel.module.scss"

const PanelHeader = ({ musicPlayerStore, title, panelName }) => {
  return (
    <header className={styles.header}>
      <h3>{title}</h3>
      <div
        className={`${styles.closeBtn} icon-cross`}
        onClick={() => musicPlayerStore.togglePanel(panelName)}
      />
    </header>
  )
}

PanelHeader.propTypes = {
  title: PropTypes.string.isRequired,
  panelName: PropTypes.string.isRequired
}

export default inject("musicPlayerStore")(observer(PanelHeader))
