import React from "react"
import Slider from "react-slick"
import ContentBlock from "./ContentBlock"
import CallToActionButton from "./CallToActionButton"
import { range } from "../helpers"
import { gallerySettings } from "../data/sliderSettings"

const Family = () => {
  const renderSlideshow = () => {
    const family = range(8).map(n => {
      return <div key={n} style={{ backgroundImage: `url(../assets/family/family${n}.jpg)` }} />
    })

    return <Slider {...gallerySettings}>{family}</Slider>
  }

  return (
    <div className="section section-family">
      <ContentBlock
        header="Family"
        headerColor="purple"
        body="Sparked in 2010 by a conversation between two friends at a cozy coffee shop in Portland, Oregon, Marmoset has since grown into a global music agency. In its first two years, our staff expanded from two to four employees. By 2014, the Marmogang had reached 15 people. Today, we're a crew of more than 50 full-time family members and collaborators, most of whom make music, release records and tour outside of work. We're hikers, coffee lovers, taco connoisseurs, and when it comes to karaoke battles, we'll throw down with the best of them."
      />

      <div className="horizontal-container">{renderSlideshow()}</div>

      <div className="section-inner">
        <CallToActionButton
          url="/our-purpose/family"
          text="Learn More About Our Family"
          bypass={true}
        />
      </div>
    </div>
  )
}

export default Family
