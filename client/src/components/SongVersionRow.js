import React, { Component } from "react"
import styles from "../styles/SongVersionRow.module.scss"

class SongVersionRow extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className={styles.songVersionRow}>
        <div>{this.props.song.title}</div>
        <div>{this.props.song.artist}</div>
        <div>{this.props.song.genres}</div>
        <div>{this.props.song.arc}</div>
        <div>{this.props.song.energy}</div>
        <div>{this.props.song.length}</div>
      </div>
    )
  }
}

export default SongVersionRow
