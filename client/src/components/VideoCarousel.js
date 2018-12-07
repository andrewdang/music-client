import React, { Component } from "react"
import axios from "axios"
import ButtonStates from "./ButtonStates"

class VideoCarousel extends Component {
  constructor(props) {
    super(props)
    this.state = { medias: [] }
  }

  componentDidMount() {
    const { cacheKey, id } = this.props
    axios
      .get(`/fetch_playlist`, { params: { id, cacheKey } })
      .then(response => this.setState({ medias: response.data.medias }))
      .catch(error => console.log("error", error))
  }

  componentDidUpdate() {
    let hashedId = this.singleVideoTarg ? this.singleVideoTarg.dataset.hashedId : undefined
    this.embedVideo(hashedId)
    // mm.VideoCarousel.init();
  }

  embedVideo(hashedId) {
    if (!hashedId) return
    // mm.StandaloneVideo(hashedId, null, 764, null, $(this.singleVideoTarg));
  }

  renderCarousel() {
    return (
      <div className="video-carousel">
        <div className="contain">
          <div className="carousel-controls video-ui">
            <a className="carousel-controls-control carousel-controls-control--back back" />
            <a className="carousel-controls-control carousel-controls-control--next next" />
          </div>
          <ul className="video-carousel-videos">{this.renderCarouselVideos()}</ul>
          <ol className="page-dots video-ui">{this.renderCarouselDots()}</ol>
        </div>
      </div>
    )
  }

  renderCarouselDots() {
    return this.state.medias.map((media, index) => {
      return (
        <li key={index} className={`${index === 0 ? "current" : ""}`}>
          <a href="#">{index}</a>
        </li>
      )
    })
  }

  renderCarouselVideos() {
    return this.state.medias.map((media, index) => {
      const video = media.media,
        poster = {
          background: `url( ${video.poster} ) center center / cover no-repeat`
        }

      return (
        <li
          key={index}
          className="centered video-carousel-video"
          data-eq={index}
          data-hashed-id={video.hashed_id}
          data-wistia={JSON.stringify(video)}
        >
          <div className="info">
            <div id={`wistia_${video.hashed_id}`} className="video-carousel-embed" />
            <div className="video-carousel-poster" style={poster} />
            <hgroup className="video-ui">
              <a data-prevent-default className="video-carousel-play-pause">
                <ButtonStates />
              </a>
              <h1>{video.name}</h1>
            </hgroup>
          </div>
        </li>
      )
    })
  }

  renderVideo(media) {
    const style = {
      background: `url( ${media.poster} ) center center / cover no-repeat`
    }

    return (
      <div className="wistia-wrapper">
        <div className="video-container">
          <div
            className="info"
            data-wistia={JSON.stringify(media)}
            data-hashed-id={media.hashed_id}
            ref={ref => (this.singleVideoTarg = ref)}
          >
            <div className="video-poster" style={style} />
            <hgroup className="video-ui">
              <a data-prevent-default className="video-play-pause">
                <ButtonStates />
              </a>
              <h1>{media.name}</h1>
            </hgroup>
          </div>
        </div>
      </div>
    )
  }

  render() {
    const { medias } = this.state
    switch (medias.length) {
      case 0:
        return <div />
        break
      case 1:
        return this.renderVideo(medias[0].media)
        break
      default:
        return this.renderCarousel()
        break
    }
  }
}

export default VideoCarousel
