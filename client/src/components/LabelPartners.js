import React from "react"
import Slider from "react-slick"
import { range } from "../helpers"
import { logoSettings } from "../data/sliderSettings"

const LabelPartners = () => {
  const renderSlider = () => {
    const partners = range(13).map(num => {
      return (
        <div key={num} className="logo-slide">
          <img src={`../assets/partners/partner${num}.png`} />
        </div>
      )
    })

    return <Slider {...logoSettings}>{partners}</Slider>
  }

  return (
    <div className="section section-label-partners">
      <div className="section-inner">
        <div className="section-content section-small">
          <h1 className="color-purple">Label Partners</h1>
          <div className="rainbow rainbow-center" />
          <p>
            We work closely with a diverse collection of respected record labels and label groups
            from all over the world, striving to curate as many truly rare and fascinating artists
            on our roster as possible. From exclusive, original vintage music dating back to the
            1920s to digital cumbia and Norwegian indie pop, we are thrilled to work with our label
            partners to collect recordings you won't find available for license anywhere else on the
            planet.
          </p>
        </div>

        <div className="brands">{renderSlider()}</div>
      </div>
    </div>
  )
}

export default LabelPartners
