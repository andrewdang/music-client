import React from "react"
import styles from "../styles/SongTableHeader.module.scss"

const SongTableHeader = () => {
  return (
    <div className={`${styles.songTableHeader}`}>
      <div>Song</div>
      <div>Artist</div>
      <div>Genres</div>
      <div>Arc&trade;</div>
      <div>Energy</div>
      <div>Length</div>
    </div>
  )
}

export default SongTableHeader
