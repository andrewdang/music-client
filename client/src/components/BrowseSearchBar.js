import React from "react"
import { inject, observer } from "mobx-react"
import ReactResponsiveSelect from "react-responsive-select"
import styles from "../styles/BrowseSearchBar.module.scss"
import CaretIcon from "./CaretIcon"

const BrowseSearchBar = ({ browseStore }) => {
  const handleSearch = e => {
    if (e.key === "Enter") browseStore.setSearchQuery(e.target.value)
  }

  return (
    <div className={styles.searchWrapper}>
      <div className={`${styles.searchIcon} icon-search`} />
      <input
        type="text"
        placeholder="Portland..."
        name="search"
        defaultValue={browseStore.search.query}
        className={styles.searchInput}
        onKeyPress={e => handleSearch(e)}
      />
      <div className="search-dropdown">
        <ReactResponsiveSelect
          name="search"
          onChange={selected => browseStore.setSearchBy(selected)}
          selectedValue={browseStore.search.type}
          caretIcon={<CaretIcon />}
          options={[
            { text: "All", value: "all" },
            { text: "Songs", value: "songs" },
            { text: "Artists", value: "artists" },
            { text: "Lyrics", value: "lyrics" }
          ]}
        />
      </div>
    </div>
  )
}

export default inject("browseStore")(observer(BrowseSearchBar))
