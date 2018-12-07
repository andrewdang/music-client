import React from "react"
import { inject, observer } from "mobx-react"
import ReactResponsiveSelect from "react-responsive-select"
import styles from "../styles/BrowseSort.module.scss"
import CaretIcon from "./CaretIcon"

const BrowseSort = ({ browseStore }) => {
  const selectedValue = browseStore.sort.by
  const { setSort } = browseStore

  return (
    <div className={styles.selectWrapper}>
      <div className={styles.select}>
        <ReactResponsiveSelect
          name="sort"
          onChange={value => setSort(value)}
          selectedValue={selectedValue}
          caretIcon={<CaretIcon />}
          options={[
            { text: "Marmoset Sort", value: "default" },
            { text: "Newest to Oldest", value: "newest" },
            { text: "Oldest to Newest", value: "oldest" },
            { text: "A - Z", value: "a-z" },
            { text: "Z - A", value: "z-a" },
            { text: "Shortest to Longest", value: "shortest" },
            { text: "Longest to Shortest", value: "longest" }
          ]}
        />
      </div>
    </div>
  )
}

export default inject("browseStore")(observer(BrowseSort))
