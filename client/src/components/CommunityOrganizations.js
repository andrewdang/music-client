import React from "react"
import ContentBlock from "./ContentBlock"
import NonprofitItem from "./NonprofitItem"
import nonprofits from "../data/nonprofits"

const CommunityOrganizations = () => {
  const renderNonprofits = () => {
    return nonprofits.map(np => {
      const { id, donationAmount, description, imgFile, url } = np
      return (
        <NonprofitItem
          key={id}
          donationAmount={donationAmount}
          description={description}
          imgFile={imgFile}
          url={url}
        />
      )
    })
  }

  return (
    <div className="section nonprofit">
      <ContentBlock
        header="Sharing the Love"
        headerColor="green"
        body={
          "\"Community\" doesn't just refer to the artist and creative community. When we say it, we're talking the whole community at large, and we are honored to help and support it however we can. Each month, Marmoset donates 10% of our gross revenue from the largest licenses and projects to local non-profits close to our hearts — and all without the artist's losing a penny of their own cut — making each opportunity a doubling down on our commitment of fostering community goodness."
        }
      />

      <div className="nonprofit-logos">{renderNonprofits()}</div>
    </div>
  )
}

export default CommunityOrganizations
