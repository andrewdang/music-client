import React, { Component } from "react"
import Hero from "./Hero"
import LineBreakUp from "./LineBreakUp"
import LineBreakDown from "./LineBreakDown"
import PageIntro from "./PageIntro"
import ContactFooter from "./ContactFooter"
// import ArtistsMap from "../components/ArtistsMap";
import ArtistProfiles from "./ArtistProfiles"
import FeaturedArtists from "./FeaturedArtists"
import LabelPartners from "./LabelPartners"
import ExploreArtists from "./ExploreArtists"

class ArtistsContainer extends Component {
  constructor(props) {
    super(props)
    this.state = { featuredArtists: true }
    this.anyFeaturedArtists = this.anyFeaturedArtists.bind(this)
  }

  anyFeaturedArtists(response) {
    this.setState({ featuredArtists: response })
  }

  renderFeaturedArtists() {
    if (!this.state.featuredArtists) return
    return <FeaturedArtists anyFeaturedArtists={this.anyFeaturedArtists} />
  }

  render() {
    return (
      <div className="content">
        <section id="mm-artists">
          <Hero header="Artists" pageClass="artist" />
          <PageIntro
            content="We might be a little biased, but we believe our artist community is comprised of some of the most brilliant, kind-hearted and uber-creative musicians out there. They are baristas and carpenters. Photographers and filmmakers. Sisters and brothers. Mothers and fathers. Soul singers and electropop producers. But, most importantly, they are hardworking artists doing what they love, and we support them however we can &mdash; whether that's changing the perceived value of music today, advocating for blue collar musicians, or pushing the boundaries of what music licensing can be."
            header="About Our Artists"
            pageClass="artists-about"
            headerColor="green"
          />
          {/* <ArtistsMap /> */}
          {this.renderFeaturedArtists()}
          <LineBreakDown />
          <LabelPartners />
          <LineBreakUp />
          <ArtistProfiles />
          <ExploreArtists />
          <ContactFooter />
        </section>
      </div>
    )
  }
}

export default ArtistsContainer
