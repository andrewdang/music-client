import React from "react"
import Hero from "./Hero"
import SoundWave from "./SoundWave"
import LineBreakDown from "./LineBreakDown"
import CreativeServices from "./CreativeServices"
import OriginalMusic from "./OriginalMusic"
import ViewArtistsPurpose from "./ViewArtistsPurpose"
import ContactFooter from "./ContactFooter"
import ConnectWithUsCTA from "./ConnectWithUsCTA"

const WhatWeDoContainer = () => {
  return (
    <div className="content">
      <section id="mm-what-we-do">
        <Hero header="What We Do" pageClass="music-supervision">
          <SoundWave />
        </Hero>
        <CreativeServices />
        <ConnectWithUsCTA
          header="Need Help Finding or Licensing Music?"
          buttonText="Connect With Creative Licensing"
          buttonLink="flashlight@marmosetmusic.com"
        />
        <LineBreakDown />
        <OriginalMusic />
        <ConnectWithUsCTA
          header="Need Original Music Services?"
          buttonText="Connect With Original Music"
          buttonLink="magic@marmosetmusic.com"
        />
        <ViewArtistsPurpose />
        <ContactFooter />
      </section>
    </div>
  )
}

export default WhatWeDoContainer
