import React from "react"
import PageIntro from "./PageIntro"
import Accordion from "./Accordion"
import AccordionList from "./AccordionList"
// import VideoCarousel from "./VideoCarousel"
import originalMusic from "../data/originalMusic"

const OriginalMusic = () => {
  const renderAccordions = () => {
    return originalMusic.map(service => {
      const { id, buttonText, content } = service
      return <Accordion key={id} id={id} buttonText={buttonText} content={content} />
    })
  }

  return (
    <div className="section-original-music">
      <PageIntro
        header="Original Music"
        headerColor="purple"
        pageClass="music-supervision"
        content="With music, sometimes you need to start from scratch — that's what the Original Music Team specializes in. Our experienced team of Music Producers will take an idea in whatever form it may be and dig deep into it, dissecting the references, the moods, and all the nitty gritty details to finely articulate your specific needs. Let's create."
      />

      <div className="accordion-list accordion-list-green">
        <AccordionList>{renderAccordions()}</AccordionList>
      </div>

      {/* <VideoCarousel cacheKey="originals_wistia" id="1t4ap8wtj1" /> */}
    </div>
  )
}

export default OriginalMusic
