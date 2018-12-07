import React from "react"
import PropTypes from "prop-types"
import { inject } from "mobx-react"
import { withRouter } from "react-router-dom"
import drawers from "../styles/drawers.module.scss"
import buttons from "../styles/buttons.module.scss"

const Cart = ({ drawerStore, history, location }) => {
  const continueExploring = () => {
    drawerStore.closeDrawer()
    if (location !== "browse") history.push("/browse")
  }

  return (
    <section className={drawers.main}>
      <hgroup className={drawers.hGroup}>
        <h1 className={drawers.header}>Your Cart</h1>
      </hgroup>

      <button className={buttons.short} onClick={continueExploring}>
        Continue Exploring
      </button>
    </section>
  )
}

Cart.propTypes = {
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired
}

export default withRouter(inject("drawerStore")(Cart))
