import React, { Component } from "react"
import { observer, inject } from "mobx-react"
import { decimalToMinutes } from "../helpers"
import ReactRanger from "react-ranger"
import SliderKnob from "./SliderKnob"
import styles from "../styles/LengthFilter.module.scss"

class LengthFilters extends Component {
  state = {
    min: this.props.browseStore.filterTypes.length.filters.min,
    max: this.props.browseStore.filterTypes.length.filters.max
  }

  handleChange = value => {
    const [min, max] = value.value
    this.setState({ min, max })
  }

  setLength = () => {
    const { min, max } = this.state
    this.props.browseStore.setLengthFilters(min, max)
  }

  render() {
    const { min, max } = this.state
    const barStyle = min === 0 && max === 20 ? styles.greyBar : styles.purpleBar

    return (
      <div className={styles.wrapper}>
        <p className={styles.instructions}>Drag the sliders to the desired length of your song.</p>

        <div className={styles.minMax}>
          <span>min</span>
          <span>max</span>
        </div>

        <ReactRanger
          min={0}
          max={20}
          stepSize={0.01}
          value={[min, max]}
          onChange={value => this.handleChange({ value })}
          onRelease={this.setLength}
        >
          {({ getTrackProps, handles }) => (
            <div className={barStyle} {...getTrackProps()}>
              {handles.map(({ value, getHandleProps }) => (
                <div {...getHandleProps()}>
                  <SliderKnob>{decimalToMinutes(value)}</SliderKnob>
                </div>
              ))}
            </div>
          )}
        </ReactRanger>
      </div>
    )
  }
}

export default inject("browseStore")(observer(LengthFilters))
