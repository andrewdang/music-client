import React from "react"
import PropTypes from "prop-types"
import styles from "../styles/FilteredByList.module.scss"

const SearchedBy = ({ clearSearch, query }) => {
  return (
    <ul className={styles.filterList}>
      <li className={styles.name} onClick={clearSearch}>
        {query}
        <span className={`${styles.closeIcon} icon-x`} />
      </li>
    </ul>
  )
}

SearchedBy.propTypes = {
  clearSearch: PropTypes.func.isRequired,
  query: PropTypes.string.isRequired
}

export default SearchedBy
