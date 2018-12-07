import React, { Component } from "react"
import MapGL from "react-map-gl"
import ArtistsMapOverlay from "./ArtistsMapOverlay"

import { json as requestJson } from "d3-request"

const MAPBOX_TOKEN = process.env.MAPBOX_ACCESS_TOKEN

class ArtistsMap extends Component {
  constructor(props) {
    super(props)
    this.state = {
      viewport: {
        ...ArtistsMapOverlay.defaultViewport,
        width: 500,
        height: 500
      },
      data: null,
      selectedCounty: null
    }
  }

  componentDidMount() {
    window.addEventListener("resize", this._resize.bind(this))
    this._resize()

    this.setState({
      data: [],
      selectedCounty: []
    })
  }

  _resize() {
    this._onViewportChange({
      width: window.innerWidth,
      height: window.innerHeight
    })
  }

  _onViewportChange(viewport) {
    this.setState({
      viewport: { ...this.state.viewport, ...viewport }
    })
  }

  render() {
    const { viewport, data, selectedCounty } = this.state

    return (
      <div className="section section-artist-map">
        <MapGL
          {...viewport}
          dragRotate={true}
          scrollZoom={false}
          onViewportChange={this._onViewportChange.bind(this)}
          mapboxApiAccessToken={MAPBOX_TOKEN}
        >
          <ArtistsMapOverlay
            viewport={viewport}
            data={data}
            selectedFeature={selectedCounty}
            strokeWidth={3}
          />
        </MapGL>
      </div>
    )
  }
}

export default ArtistsMap
