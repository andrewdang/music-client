import React, { Component, Fragment } from "react"
import { range } from "../helpers"

class AccordionList extends Component {
  constructor(props) {
    super(props)

    const accordionCount = React.Children.count(this.props.children)
    const accordionStates = range(accordionCount).reduce((acc, n) => {
      acc[n] = false
      return acc
    }, {})

    this.setActiveAccordion = this.setActiveAccordion.bind(this)
    this.state = { accordionStates }
  }

  setActiveAccordion(id, active) {
    const { accordionStates } = this.state
    for (const accordion in accordionStates) {
      accordionStates[accordion] = id === accordion && active
    }

    this.setState({ accordionStates })
  }

  renderAccordions() {
    const state = this.state.accordionStates
    const props = { setActiveAccordion: this.setActiveAccordion }

    return React.Children.map(this.props.children, child => {
      props["active"] = state[child.key]
      return React.cloneElement(child, props)
    })
  }

  render() {
    return <Fragment>{this.renderAccordions()}</Fragment>
  }
}

export default AccordionList
