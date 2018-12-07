import React from "react"
import ButtonStates from "./ButtonStates"

const FeaturedArtist = props => {
  const { id, name, genre, photo, slug, songVersions } = props,
    style = { background: `url( ${photo} ) no-repeat center center / cover` }

  const handlePlayArtistSongs = e => {
    e.preventDefault()
    mm.playerProxy.trigger("play", JSON.parse(e.currentTarget.dataset.songVersions))
  }

  return (
    <div key={id} className="artist-square" style={style}>
      <a
        className="artist-listen"
        data-song-versions={songVersions}
        data-prevent-default
        onClick={e => handlePlayArtistSongs(e)}
      >
        <ButtonStates />
      </a>
      <div className="artist-info">
        <h1>{name}</h1>
        <p>{genre}</p>
        <a className="artist-link-button" href={`/artists/${slug}`} data-bypass="true">
          <span className="icon" />
          <span className="cta-text">More From This Artist</span>
        </a>
      </div>
    </div>
  )
}

export default FeaturedArtist
