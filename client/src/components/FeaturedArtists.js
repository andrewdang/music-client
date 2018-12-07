import React, { Component } from "react"
import axios from "axios"
import Slider from "react-slick"
import FeaturedArtist from "./FeaturedArtist"
import { featuredArtistsSettings } from "../data/sliderSettings"

class FeaturedArtists extends Component {
  constructor(props) {
    super(props)
    this.state = { featuredArtists: [] }
  }

  componentDidMount() {
    axios
      .get("/featured_artists")
      .then(response => {
        this.setState({ featuredArtists: response.data })
      })
      .catch(error => console.log(e))
  }

  renderFeaturedArtists() {
    return this.state.featuredArtists.map(artist => {
      return (
        <FeaturedArtist
          key={artist.id}
          id={artist.id}
          name={artist.name}
          genre={artist.genres}
          photo={artist.photo}
          slug={artist.slug}
          songVersions={JSON.stringify(artist.song_versions)}
        />
      )
    })
  }

  render() {
    return (
      <div className="section section-featured-artists">
        <div className="section-content">
          <h1>Featured Artists</h1>
        </div>

        <div className="clear">
          <Slider {...featuredArtistsSettings}>{this.renderFeaturedArtists()}</Slider>
        </div>
      </div>
    )
  }
}

export default FeaturedArtists
