import React, { Component, Fragment } from "react"
import { inject, observer } from "mobx-react"
import { withRouter } from "react-router-dom"
import styles from "../styles/Browse.module.scss"
import cStyles from "../styles/containers.module.scss"
import FilteredOrSearchedBy from "../components/FilteredOrSearchedBy"
import NavMenu from "../components/NavMenu"
import BrowseFilterTypes from "../components/BrowseFilterTypes"
import BrowseSearchBar from "../components/BrowseSearchBar"
import BrowseSort from "../components/BrowseSort"
import BrowseResults from "../components/BrowseResults"

class Browse extends Component {
  state = {
    filter: true,
    search: false
  }

  componentDidMount() {
    const queryStrings = this.props.history.location.search

    if (queryStrings !== "") {
      this.props.browseStore.syncWithQueryStrings(queryStrings)
      if (queryStrings.includes("?search")) {
        this.setActiveTab("search")
      }
    }
  }

  setActiveTab = tab => {
    const state = Object.assign({}, this.state)
    Object.keys(state).forEach(key => (state[key] = key === tab))
    this.setState(state)
  }

  render() {
    return (
      <Fragment>
        <section className={styles.hero}>
          <NavMenu />
          <header className={styles.heroHeader} />
        </section>

        <div className={styles.tabs}>
          {Object.keys(this.state).map(key => {
            return (
              <div
                key={key}
                className={`${styles.tab} ${this.state[key] && styles.active}`}
                onClick={() => this.setActiveTab(key)}
              >
                {key}
              </div>
            )
          })}
        </div>

        <div className={cStyles.greyBg}>
          <div className={cStyles.container}>
            {this.state.filter && <BrowseFilterTypes />}
            {this.state.search && <BrowseSearchBar />}
          </div>

          <div className={cStyles.lightGreyBg}>
            <div className={`${cStyles.container} ${styles.browseOverview}`}>
              <div className={styles.flexRow}>
                <FilteredOrSearchedBy />
              </div>
              <div className={styles.browseSort}>
                <BrowseSort />
              </div>
            </div>
          </div>
        </div>

        <BrowseResults />
      </Fragment>
    )
  }
}

export default withRouter(inject("browseStore")(observer(Browse)))
