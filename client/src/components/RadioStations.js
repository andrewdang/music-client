import React, { Component } from "react"
import panelStyles from "../styles/panel.module.scss"
import stationStyles from "../styles/RadioStations.module.scss"
import PanelHeader from "./PanelHeader"

class RadioStations extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className={panelStyles.content}>
        <PanelHeader title="Radio Stations" panelName="radioStations" />
        <div className={stationStyles.grid}>
          <div />
          <div />
          <div />
          <div />

          <div />
          <div />
          <div />
          <div />
        </div>
      </div>
    )
  }
}

RadioStations.defaultProps = {
  transitionStatus: ""
}

export default RadioStations
