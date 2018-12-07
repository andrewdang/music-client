import React from "react"
import { Link } from "react-router-dom"
import NavMenuLink from "./NavMenuLink"
import styles from "../styles/NavMenu.module.scss"

const NavMenu = () => {
  return (
    <nav className={styles.nav}>
      <Link to="/" className={styles.logo} style={{ color: "white", textDecoration: "none" }}>
        MARMOSET
      </Link>

      <nav>
        <NavMenuLink to="/browse" text="Browse" />
        <NavMenuLink to="/what-we-do" text="What We Do" />
        <NavMenuLink to="/our-purpose" text="Our Purpose" />
        <NavMenuLink to="/contact" text="Contact" />
        <a href="http://journal.marmosetmusic.com" className={styles.link}>
          Journal
        </a>
      </nav>
    </nav>
  )
}

export default NavMenu
