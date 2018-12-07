import React from "react"
import { inject, observer } from "mobx-react"
import styles from "../styles/BrowseFilterTypes.module.scss"
import FilterTypeButton from "../components/FilterTypeButton"
import VocalFilters from "./VocalFilters"
import MoodFilters from "./MoodFilters"
import EnergyFilters from "./EnergyFilters"
import ArcFilters from "./ArcFilters"
import LengthFilter from "./LengthFilter"
import GenreFilters from "./GenreFilters"
import InstrumentFilters from "./InstrumentFilters"
import CustomizableFilters from "./CustomizableFilters"
import InternalFilters from "./InternalFilters"

const filterComponents = {
  vocals: VocalFilters,
  mood: MoodFilters,
  energy: EnergyFilters,
  arc: ArcFilters,
  length: LengthFilter,
  genres: GenreFilters,
  instruments: InstrumentFilters,
  customizable: CustomizableFilters,
  internal: InternalFilters
}

const BrowseFilterTypes = ({ browseStore }) => {
  const filterTypes = browseStore.filterTypes
  const FilterComponent = filterComponents[browseStore.activeFilterType]

  return (
    <section style={{ padding: "0 1em" }}>
      <div className={styles.filterTypes}>
        <div className={styles.filterButtons}>
          {Object.keys(filterTypes).map(filterType => {
            const filterTypeObj = filterTypes[filterType]

            return (
              <FilterTypeButton
                key={filterType}
                name={filterType}
                active={filterTypeObj.active}
                setActiveFilterType={browseStore.setActiveFilterType}
                filtersApplied={browseStore.filterTypeStates[filterType]}
              />
            )
          })}
        </div>
      </div>

      <div className={styles.filterComponentWrapper}>
        <FilterComponent />
      </div>
    </section>
  )
}

export default inject("browseStore")(observer(BrowseFilterTypes))
