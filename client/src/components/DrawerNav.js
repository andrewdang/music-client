import React from "react"
import { inject, observer } from "mobx-react"
import cx from "classnames"
import DrawerNavButton from "./DrawerNavButton"
import styles from "../styles/DrawerNav.module.scss"

const DrawerNav = props => {
  const { drawers, drawerOpen, activeDrawer, setActiveDrawer, closeDrawer } = props.drawerStore
  const classNames = cx(styles.drawerNav, {
    [styles.open]: drawerOpen
  })

  return (
    <aside className={classNames}>
      {Object.keys(drawers).map(drawerName => (
        <DrawerNavButton
          key={drawerName}
          drawerName={drawerName}
          activeDrawer={activeDrawer}
          setActiveDrawer={setActiveDrawer}
          closeDrawer={closeDrawer}
          active={drawers[drawerName]}
        />
      ))}
    </aside>
  )
}

export default inject("drawerStore")(observer(DrawerNav))
