import React, { Component } from "react"
import historyStyles from "../styles/History.module.scss"
import panelStyles from "../styles/panel.module.scss"
import PanelHeader from "./PanelHeader"

class History extends Component {
  render() {
    return (
      <div className={panelStyles.content}>
        <PanelHeader title="History" panelName="history" />

        <div className={historyStyles.historyTable}>
          <div className={`${historyStyles.tableHeaderRow}`}>
            <div />
            <div>Song</div>
            <div>Artist</div>
            <div>Genres</div>
            <div>Arc</div>
            <div>Length</div>
          </div>

          <div className={historyStyles.songRow}>
            <div className={`${historyStyles.playBtn} icon-play`} />
            <div>All or Nothing</div>
            <div>Derby</div>
            <div>Pop, Rock</div>
            <div>Arc</div>
            <div>2:50</div>
          </div>
        </div>
      </div>
    )
  }
}

History.defaultProps = {
  transitionStatus: ""
}

export default History
