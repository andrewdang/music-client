import React from "react"
import { Link } from "react-router-dom"
import styles from "../styles/HomeHero.module.scss"
import bstyles from "../styles/buttons.module.scss"
import NavMenu from "./NavMenu"

const HomeHero = () => {
  return (
    <section className={styles.hero}>
      <NavMenu />
      <header className={styles.heroHeader}>
        <div className={styles.centeredContent}>
          <h1 className={styles.mainHeader}>Meticulously curated music for licensing</h1>
          <h2 className={styles.subHeader}>
            <em>
              Browse our roster of rare and emerging independent artists, bands and record labels
            </em>
          </h2>
          <Link to="/browse">
            <button className={bstyles.transparentPurple}>browse music</button>
          </Link>
        </div>
      </header>

      <div className={styles.callToAction}>
        <div className={`${styles.arrow} icon-caret-down`} />
      </div>
    </section>
  )
}

export default HomeHero
