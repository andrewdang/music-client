import React from "react"
import Slider from "react-slick"
import ContentBlock from "./ContentBlock"
import CallToActionButton from "./CallToActionButton"
import { range } from "../helpers"
import { gallerySettings } from "../data/sliderSettings"

const Events = () => {
  const renderSlideshow = () => {
    const events = range(6).map(n => {
      return <div key={n} style={{ backgroundImage: `url(../assets/events/events${n}.jpg)` }} />
    })

    return <Slider {...gallerySettings}>{events}</Slider>
  }

  return (
    <div className="section section-events">
      <ContentBlock
        header="Let's Get Together"
        headerColor="purple"
        body="On top of our regular commitment to giving, Marmoset hosts a number of community education events throughout the year. From scoring a short film live in front of an audience, like in our A/VEC series, to bringing industry experts in to examine and dissect a topic pertinent to artists and creatives at our Community Education Events (CEE), our goal is to help educate, connect, support and inspire as much of our Marmoset community as possible. Not only this, but we strive to push boundaries, ask the tough questions and add clarity to complex topics like — PROs, Copyrights, Ad Revenue, Streaming Royalties, and even Gender Roles — to shine a light and demystify areas and topics that need the attention the most."
      />

      <div className="horizontal-container">{renderSlideshow()}</div>

      <div className="events-space">
        <CallToActionButton url="/news-blog/marmoset-events" text="View Upcoming Events" />
      </div>
    </div>
  )
}

export default Events
