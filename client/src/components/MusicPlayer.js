import React, { Component } from "react"
import { inject, observer } from "mobx-react"
import styles from "../styles/MusicPlayer.module.scss"
import MusicPlayerButton from "./MusicPlayerButton"

class MusicPlayer extends Component {
  constructor(props) {
    super(props)

    this.showLabel = this.showLabel.bind(this)
    this.hideLabel = this.hideLabel.bind(this)

    this.state = { label: "" }
  }

  showLabel(label) {
    const state = Object.assign({}, this.state)
    state.label = label
    this.setState(state)
  }

  hideLabel() {
    const state = Object.assign({}, this.state)
    state.label = ""
    this.setState(state)
  }

  render() {
    const { musicPlayer, innerLeft, songBtns, panelBtns, btnLabel } = styles

    return (
      <aside className={musicPlayer}>
        <MusicPlayerButton iconName="play" />

        <div className={innerLeft}>
          <div className={btnLabel}>{this.state.label}</div>

          <div className={songBtns}>
            <MusicPlayerButton
              iconName="open-book"
              label="lyrics"
              showLabel={this.showLabel}
              hideLabel={this.hideLabel}
            />
            <MusicPlayerButton
              iconName="star"
              label="add to favorites"
              showLabel={this.showLabel}
              hideLabel={this.hideLabel}
            />
            <MusicPlayerButton
              iconName="download"
              label="download temp song"
              showLabel={this.showLabel}
              hideLabel={this.hideLabel}
            />
            <MusicPlayerButton
              iconName="share"
              label="share"
              showLabel={this.showLabel}
              hideLabel={this.hideLabel}
            />
          </div>
        </div>

        <div className={panelBtns}>
          <MusicPlayerButton
            iconName="radio"
            label="radio stations"
            panelName="radioStations"
            togglePanel={this.props.musicPlayerStore.togglePanel}
            showLabel={this.showLabel}
            hideLabel={this.hideLabel}
            active={this.props.musicPlayerStore.panels["radioStations"]}
          />
          <MusicPlayerButton
            iconName="clock"
            label="history"
            panelName="history"
            togglePanel={this.props.musicPlayerStore.togglePanel}
            showLabel={this.showLabel}
            hideLabel={this.hideLabel}
            active={this.props.musicPlayerStore.panels["history"]}
          />
        </div>
      </aside>
    )
  }
}

export default inject("musicPlayerStore")(observer(MusicPlayer))
