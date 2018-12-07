import React, { Component } from "react"
import styles from "../styles/BrowseResults.module.scss"
import containerStyles from "../styles/containers.module.scss"
import SongVersionRow from "../components/SongVersionRow"
import SongTableHeader from "../components/SongTableHeader"

class BrowseResults extends Component {
  render() {
    const song = {
      title: "title",
      artist: "dang",
      genres: ["rap", "rock"],
      arc: "arc",
      energy: "low",
      length: "2:31"
    }

    return (
      <div className={containerStyles.container}>
        <div className={styles.resultsTable}>
          <SongTableHeader />
          <SongVersionRow song={song} />
        </div>
      </div>
    )
  }
}

export default BrowseResults
