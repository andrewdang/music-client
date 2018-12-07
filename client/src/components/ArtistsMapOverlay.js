import React, { Component } from "react"
import { scaleQuantile } from "d3-scale"
import DeckGL, { ArcLayer } from "deck.gl"

export const inFlowColors = [
  [255, 255, 204],
  [199, 233, 180],
  [127, 205, 187],
  [65, 182, 196],
  [29, 145, 192],
  [34, 94, 168],
  [12, 44, 132]
]

export const outFlowColors = [
  [255, 255, 178],
  [254, 217, 118],
  [254, 178, 76],
  [253, 141, 60],
  [252, 78, 42],
  [227, 26, 28],
  [177, 0, 38]
]

export default class ArtistsMapOverlay extends Component {
  static get defaultViewport() {
    return {
      mapStyle: "mapbox://styles/mapbox/light-v9",
      longitude: -100,
      latitude: 40.7,
      zoom: 3,
      maxZoom: 3,
      pitch: 30,
      bearing: 30
    }
  }

  constructor(props) {
    super(props)
    this.state = {
      arcs: this._getArcs(props)
    }
  }

  componentWillReceiveProps(nextProps) {
    if (
      nextProps.data !== this.props.data ||
      nextProps.selectedFeature !== this.props.selectedFeature
    ) {
      this.setState({
        arcs: this._getArcs(nextProps)
      })
    }
  }

  _getArcs({ data, selectedFeature }) {
    if (!data || !selectedFeature) {
      return null
    }

    const arcs = [
      { target: [133.775136, -25.274398] }, // Australia
      { target: [-51.92528, -14.235004] }, // Brazil
      { target: [-106.346771, 56.130366] }, // Canada
      { target: [9.501785, 56.26392] }, // Denmark
      { target: [-1.17432, 52.355518] }, // England
      { target: [25.013607, 58.595272] }, // Estonia
      { target: [2.213749, 46.227638] }, // France
      { target: [24.955115, 60.609393] }, // Finland
      { target: [9.136655, 50.049584] }, // Germany
      { target: [-19.172217, 64.670993] }, // Iceland
      { target: [-7.692054, 53.142367] }, // Ireland
      { target: [34.851612, 31.046051] }, // Israel
      { target: [12.56738, 41.87194] }, // Italy
      { target: [19.082285, 47.413191] }, // Hungary
      { target: [138.252924, 36.204824] }, // Japan
      { target: [-77.328901, 18.132506] }, // Jamaica
      { target: [-99.12786, 19.445565] }, // Mexico
      { target: [-7.09262, 31.791702] }, // Morocco
      { target: [174.885971, -40.900557] }, // New Zealand
      { target: [8.468946, 60.472024] }, // Norway
      { target: [5.291266, 52.132633] }, // The Netherlands
      { target: [92.706576, 60.870481] }, // Russia
      { target: [20.884043, 43.945341] }, // Serbia
      { target: [-3.705662, 40.404162] }, // Spain
      { target: [18.071294, 59.339852] }, // Sweden
      { target: [7.46799, 46.894594] }, // Switzerland

      { target: [-149.493673, 64.200841] }, // ak
      { target: [-91.831833, 35.20105] }, // ar
      { target: [-111.093731, 34.048928] }, // az
      { target: [-127.647621, 53.726668] }, // bc
      { target: [-118.243685, 34.052234] }, // ca
      { target: [-105.782067, 39.550051] }, // co
      { target: [-73.087749, 41.603221] }, // ct
      { target: [-81.515754, 27.664827] }, // fl
      { target: [-82.900075, 32.165622] }, // ga
      { target: [-155.582782, 19.896766] }, // hi
      { target: [-114.742041, 44.068202] }, // id
      { target: [-89.398528, 40.633125] }, // il
      { target: [-86.134902, 40.267194] }, // in
      { target: [-98.484246, 39.011902] }, // ks
      { target: [-84.270018, 37.839333] }, // ky
      { target: [-91.962333, 30.984298] }, // la
      { target: [-71.382437, 42.407211] }, // ma
      { target: [-76.641271, 39.045755] }, // md
      { target: [-69.445469, 45.253783] }, // me
      { target: [-85.602364, 44.314844] }, // mi
      { target: [-94.6859, 46.729553] }, // mn
      { target: [-91.831833, 37.964253] }, // mo
      { target: [-90.198537, 32.327429] }, //  ms
      { target: [-110.362566, 46.879682] }, // mt
      { target: [-79.0193, 35.759573] }, // nc
      { target: [-99.901813, 41.492537] }, // ne
      { target: [-74.405661, 40.058324] }, // nj
      { target: [-106.633166, 35.082401] }, // nm
      { target: [-116.419389, 38.80261] }, // nv
      { target: [-74.005941, 40.712784] }, // ny
      { target: [-82.907123, 40.417287] }, // oh
      { target: [-97.092877, 35.007752] }, // ok
      { target: [-85.323214, 51.253775] }, // on
      { target: [-77.194525, 41.203322] }, // pa
      { target: [-71.207981, 46.813878] }, // qc
      { target: [-71.421182, 41.827461] }, // ri
      { target: [-81.163725, 33.836081] }, // sc
      { target: [-86.580447, 35.517491] }, // tn
      { target: [-99.901813, 31.968599] }, // tx
      { target: [-111.093731, 39.32098] }, // ut
      { target: [-78.656894, 37.431573] }, // va
      { target: [-72.590008, 44.267041] }, // vt
      { target: [-120.740139, 47.751074] }, // wa
      { target: [-88.787868, 43.78444] } // wi
    ]

    const MIN = 1,
      MAX = 5000
    var count = 0
    arcs.forEach(a => {
      a.value = -(Math.floor(Math.random() * MAX) + MIN)
      if (count % 2) {
        a.value *= -1
      }
      count++
    })

    const scale = scaleQuantile()
      .domain(arcs.map(a => Math.abs(a.value)))
      .range(inFlowColors.map((c, i) => i))

    arcs.forEach(a => {
      a.source = [-122.659237, 45.50774]
      a.gain = Math.sign(a.value)
      a.quantile = scale(Math.abs(a.value))
    })

    return arcs
  }

  _initialize(gl) {
    gl.enable(gl.DEPTH_TEST)
    gl.depthFunc(gl.LEQUAL)
  }

  render() {
    const { viewport, strokeWidth, data } = this.props
    const { arcs } = this.state

    if (!arcs) return null

    const outFlowColors = [
      [255, 255, 178],
      [254, 217, 118],
      [254, 178, 76],
      [253, 141, 60],
      [252, 78, 42],
      [227, 26, 28],
      [177, 0, 38]
    ]

    const inFlowColors = [
      [255, 255, 204],
      [199, 233, 180],
      [127, 205, 187],
      [65, 182, 196],
      [29, 145, 192],
      [34, 94, 168],
      [12, 44, 132]
    ]

    const layers = [
      new ArcLayer({
        id: "arc",
        data: arcs,
        getSourcePosition: d => d.source,
        getTargetPosition: d => d.target,
        getSourceColor: d => (d.gain > 0 ? inFlowColors : outFlowColors)[d.quantile],
        getTargetColor: d => (d.gain > 0 ? outFlowColors : inFlowColors)[d.quantile],
        strokeWidth
      })
    ]

    return <DeckGL {...viewport} layers={layers} onWebGLInitialized={this._initialize} />
  }
}
