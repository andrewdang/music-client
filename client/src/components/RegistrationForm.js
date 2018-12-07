import React, { Component } from "react"
import drawers from "../styles/drawers.module.scss"
import form from "../styles/forms.module.scss"
import buttons from "../styles/buttons.module.scss"

class RegistrationForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      emailConfirmation: "",
      signUpNews: false
    }
  }

  render() {
    return (
      <section className={drawers.main}>
        <hgroup className={drawers.hGroup}>
          <h1 className={drawers.header}>Create Account</h1>
          <h2 className={drawers.subHeader}>Enter your name and email below.</h2>
          <h2 className={drawers.subHeader}>
            We will immediately send you an email with a link to complete your profile and confirm
            your account.
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
          <input
            type="email"
            placeholder="Email Address"
            autoComplete="email"
            className={form.input}
          />
          <input
            type="email"
            placeholder="Confirm Email Address"
            autoComplete="email"
            className={form.input}
          />

          <input type="checkbox" id="newsletter" />
          <label>Sign up for MarmoNews</label>

          <p className={drawers.text}>
            By registering, you are agreeing to our <a href="/legal">Terms of Service</a>.
          </p>

          <button type="submit" className={buttons.tall}>
            Register
          </button>
        </form>
      </section>
    )
  }
}

export default RegistrationForm
