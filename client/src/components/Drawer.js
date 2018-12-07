import React from "react"
import { inject, observer } from "mobx-react"
import { Transition } from "react-transition-group"
import styles from "../styles/Drawer.module.scss"

import DrawerClose from "./DrawerClose"
import LoginForm from "./LoginForm"
import RegistrationForm from "./RegistrationForm"
import NewsSignupForm from "./NewsSignupForm"
import Cart from "./Cart"

const drawerComponents = {
  login: LoginForm,
  register: RegistrationForm,
  cart: Cart,
  marmonews: NewsSignupForm
}

const Drawer = ({ drawerStore }) => {
  const { drawers, closeDrawer } = drawerStore

  return (
    <aside className={`${styles.drawer}`}>
      <DrawerClose closeDrawer={closeDrawer} />

      {Object.keys(drawerComponents).map(drawerName => {
        const DrawerComponent = drawerComponents[drawerName]
        return (
          <Transition key={drawerName} timeout={200} in={drawers[drawerName]} unmountOnExit={true}>
            {status => (
              <div className={`${styles.contentWrapper} ${styles[status]}`}>
                <DrawerComponent />
              </div>
            )}
          </Transition>
        )
      })}
    </aside>
  )
}

export default inject("drawerStore")(observer(Drawer))
