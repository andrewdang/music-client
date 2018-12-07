import React from "react"
import { Route } from "react-router"
import { withRouter } from "react-router-dom"
import { inject, observer } from "mobx-react"
import Sidebar from "react-sidebar"
import ResponsiveNavMenu from "./ResponsiveNavMenu"
import Drawer from "./Drawer"
import Home from "./Home"
import Browse from "./Browse"
import Contact from "./Contact"
import WhatWeDoContainer from "./WhatWeDoContainer"
import OurPurposeContainer from "./OurPurposeContainer"

const sidebarStyles = {
  sidebar: {
    transition: "transform .2s ease-out",
    WebkitTransition: "-webkit-transform .2s ease-out"
  }
}

const Main = ({ drawerStore }) => {
  const { drawerOpen, closeDrawer } = drawerStore

  return (
    <Sidebar
      sidebar={<Drawer />}
      open={drawerOpen}
      onSetOpen={closeDrawer}
      pullRight={true}
      styles={sidebarStyles}
    >
      <main>
        <ResponsiveNavMenu />
        <Route exact path="/" component={Home} />
        <Route exact path="/browse" component={Browse} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/what-we-do" component={WhatWeDoContainer} />
        <Route exact path="/our-purpose" component={OurPurposeContainer} />
      </main>
    </Sidebar>
  )
}

export default withRouter(inject("drawerStore")(observer(Main)))
