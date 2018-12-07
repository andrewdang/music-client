import React, { Fragment } from "react"
import { inject, observer } from "mobx-react"
import { Transition } from "react-transition-group"
import styles from "../styles/panel.module.scss"
import History from "../components/History"
import RadioStations from "../components/RadioStations"

const panelComponents = {
  history: History,
  radioStations: RadioStations
}

const MusicPlayerPanels = ({ musicPlayerStore }) => {
  return (
    <Fragment>
      {Object.keys(musicPlayerStore.panels).map(panelName => {
        const PanelComponent = panelComponents[panelName]

        return (
          <Transition
            key={panelName}
            timeout={{ enter: 0, exit: 500 }}
            in={musicPlayerStore.panels[panelName]}
            unmountOnExit={true}
          >
            {status => (
              <div className={`${styles.panel} ${styles[status]}`}>
                <PanelComponent
                  transitionStatus={status}
                  togglePanel={musicPlayerStore.togglePanel}
                />
              </div>
            )}
          </Transition>
        )
      })}
    </Fragment>
  )
}

export default inject("musicPlayerStore")(observer(MusicPlayerPanels))
