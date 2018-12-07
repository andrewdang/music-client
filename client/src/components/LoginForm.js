import React, { Component } from "react"
import { inject } from "mobx-react"
import drawers from "../styles/drawers.module.scss"
import form from "../styles/forms.module.scss"
import buttons from "../styles/buttons.module.scss"

class LoginForm extends Component {
  state = {
    login: true,
    forgotPassword: false
  }

  handleLoginSubmit = e => {
    e.preventDefault()
    console.log("logging in")
  }

  render() {
    return (
      <section className={drawers.main}>
        <hgroup className={drawers.hGroup}>
          <h4 className={drawers.header}>Login</h4>
          <h6 className={drawers.subHeader}>Log into your Marmoset account.</h6>
        </hgroup>

        <form onSubmit={e => this.handleLoginSubmit(e)}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            autoComplete="email"
            className={form.input}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            autoComplete="current-password"
            className={form.input}
          />
          <input type="submit" className={buttons.tall} />
        </form>

        <button className={buttons.short}>I forgot my password!</button>

        <p className={drawers.text}>
          Don't have an account? Register now. It only takes a few seconds.
        </p>
        <button
          type="button"
          className={buttons.short}
          onClick={() => this.props.drawerStore.setActiveDrawer("register")}
        >
          Register
        </button>

        <p className={drawers.text}>
          <strong>Oops.</strong> I lost my activation email. Please <span>send me a new one.</span>
        </p>
      </section>
    )
  }
}

export default inject("drawerStore")(LoginForm)
