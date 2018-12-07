import React from "react"
import Slider from "react-slick"
import ContentBlock from "./ContentBlock"
import { range } from "../helpers"
import { logoSettings } from "../data/sliderSettings"

const Collaborators = () => {
  const renderSlideshow = () => {
    const collaborators = range(24).map(n => {
      return (
        <div key={n}>
          <img src={`../assets/collaborators/logo${n}.png`} alt={`logo-${n}`} />
        </div>
      )
    })

    return <Slider {...logoSettings}>{collaborators}</Slider>
  }

  return (
    <div className="section section-community-creative">
      <ContentBlock
        header="Creative Clients"
        headerColor="green"
        body="We couldn't license music without a need. That's where our creative community comes in &mdash; some of the most talented, innovative and, we'll say it &mdash; inspiring people in the filmmaking, brand and design worlds. These are the people breaking boundaries, juggling insane timelines and budgets, while constantly innovating to craft some of the coolest, most impactful work our eyes have ever seen &mdash; and searching for the perfect sound to pair with it."
      >
        {renderSlideshow()}
      </ContentBlock>
    </div>
  )
}

export default Collaborators
