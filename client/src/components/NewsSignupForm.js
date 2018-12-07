import React, { Component } from "react"
import drawers from "../styles/drawers.module.scss"
import form from "../styles/forms.module.scss"
import buttons from "../styles/buttons.module.scss"

class NewsSignUpForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      firstName: "",
      email: ""
    }
  }

  render() {
    return (
      <section className={drawers.main}>
        <hgroup className={drawers.hGroup}>
          <h1 className={drawers.header}>MarmoNews</h1>
          <h2 className={drawers.subHeader}>
            Sign up for MarmoNews to up on fresh music, events, and promo codes.
          </h2>
        </hgroup>

        <form>
          <input
            type="text"
            placeholder="First Name"
            autoComplete="given-name"
            className={form.input}
          />
          <input
            type="text"
            placeholder="Last Name"
            autoComplete="family-name"
            className={form.input}
          />

          <button type="submit" className={buttons.tall}>
            Sign Up
          </button>
        </form>
      </section>
    )
  }
}

export default NewsSignUpForm
