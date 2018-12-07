import React, { Component } from "react"
import PageIntro from "./PageIntro"
import Accordion from "./Accordion"
import AccordionList from "./AccordionList"
import creativeServices from "../data/creativeServices"
// import VideoCarousel from "./VideoCarousel"
// import { styleHeader } from "../helpers";

class CreativeServices extends Component {
  // componentDidMount() {
  //   if (this.creativeServices) document.getElementById("container").onscroll = styleHeader;
  // }

  renderAccordions() {
    return creativeServices.map(service => {
      const { id, buttonText, content } = service
      return <Accordion key={id} id={id} buttonText={buttonText} content={content} />
    })
  }

  render() {
    return (
      <div className="sub-hero" ref={ref => (this.creativeServices = ref)}>
        <PageIntro
          header="Creative Services"
          headerColor="green"
          pageClass="music-supervision"
          content="Don't worry: if you're looking for a song but don't have the time to search for it yourself, we won't judge. Our team of Music Licensing Creatives will pick through our roster with a fine-toothed comb, deftly curating songs to fit your project's specific needs. We'll work to deeply understand your creative vision and turn your mind's eye into a reality — plus maybe throw in a few ideas you never considered. Let's collaborate."
        />
        <div className="accordion-list">
          <AccordionList>{this.renderAccordions()}</AccordionList>
        </div>

        {/* <VideoCarousel cacheKey="creative_services_wistia" id="gu95cu7eni" /> */}
      </div>
    )
  }
}

export default CreativeServices
