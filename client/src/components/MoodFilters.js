import React from "react"
import { observer, inject } from "mobx-react"
import ReactResponsiveSelect from "react-responsive-select"
import moodFilters from "../data/moodFilters"
import styles from "../styles/MoodFilters.module.scss"
import fstyles from "../styles/filter.module.scss"
import MoodFilterButton from "./MoodFilterButton"

const MoodFilters = ({ browseStore }) => {
  const isTileStore = browseStore.filterTypes.mood.tiles.isTile
  const { active, value } = isTileStore
  const { moodTileValues } = browseStore
  const tiles = browseStore.filterTypes.mood.tiles
  const andTiles = [
    {
      name: "andOneTile",
      prevActive: tiles.isTile.active,
      unactiveColor: "#dcdbdb"
    },
    {
      name: "andTwoTile",
      prevActive: tiles.isTile.active && tiles.andOneTile.active,
      unactiveColor: "#e5e5e4"
    }
  ]

  const setMood = selected => {
    // "selected" is ReactResponsiveSelect object
    if (!selected.altered) return false
    const alreadySelected = browseStore.filterTypes.mood.tiles[selected.name]
    if (alreadySelected.active) browseStore.toggleFilter("mood", alreadySelected.value)
    browseStore.toggleFilter("mood", selected.value)
    browseStore.setMoodTile(selected)
  }

  const removeMood = tileName => {
    browseStore.removeMoodTile(tileName)
  }

  return (
    <div className={`${fstyles.filtersWrapper} ${styles.moodTilesWrapper}`}>
      <div className="myTile moodTile">
        <div className={styles.leftCorner}>My</div>
        <div className={`${styles.rightCorner}`} />
        <ReactResponsiveSelect
          name="myTile"
          disabled={true}
          options={[{ text: "Project", value: "project" }]}
        />
      </div>

      <MoodFilterButton
        tileName="isTile"
        cornerText="is"
        setMood={setMood}
        removeMood={removeMood}
        active={active}
        selectedValue={value}
        moodTileValues={moodTileValues}
        moodFilters={moodFilters}
      />

      {andTiles.map(
        tile =>
          tile.prevActive ? (
            <MoodFilterButton
              key={tile.name}
              tileName={tile.name}
              cornerText="and"
              setMood={setMood}
              removeMood={removeMood}
              active={tiles[tile.name].active}
              selectedValue={tiles[tile.name].value}
              moodTileValues={moodTileValues}
              moodFilters={moodFilters}
            />
          ) : (
            <div
              className="moodTile"
              key={tile.name}
              style={{ background: `${tile.unactiveColor}` }}
            />
          )
      )}
    </div>
  )
}

export default inject("browseStore")(observer(MoodFilters))
