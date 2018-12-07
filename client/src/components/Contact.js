import React, { Fragment } from "react"
import styles from "../styles/Contact.module.scss"
import NavMenu from "./NavMenu"

const Contact = () => {
  return (
    <Fragment>
      <section className={styles.hero}>
        <NavMenu />
      </section>
      <h1>Contact</h1>
    </Fragment>
  )
}

export default Contact
