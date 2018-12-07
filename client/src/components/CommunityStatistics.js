import React from "react"
import Statistic from "./Statistic"
import CallToActionButton from "./CallToActionButton"
import ContentBlock from "./ContentBlock"

const CommunityStatistics = () => {
  return (
    <div className="section section-community-stats">
      <ContentBlock
        header="Artists"
        headerColor="purple"
        body="Marmoset exists to serve our community. And that wouldn't be possible without all of the brilliant artists we partner with, plain and simple. They and the art they create is the beating heart of Marmoset and why we do what we do &mdash; we are a conduit, connecting hardworking musicians who are striving to earn a living with their art, and the creatives, producers and filmmakers who can help make that happen."
      />

      <div className="columns community-numbers">
        <Statistic name="Last Quarter" number={988635} />
        <Statistic name="Last Year" number={3178252} />
        <Statistic name="Since 2011" number={11413897} />
      </div>

      <div className="section-inner">
        <CallToActionButton url="/artists" bypass="true" text="Learn More About Our Artists" />
      </div>
    </div>
  )
}

export default CommunityStatistics
