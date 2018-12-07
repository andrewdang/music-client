import React from "react"

const Hero = props => {
  return (
    <div className={`hero hero-${props.pageClass} vertical-center`}>
      <div className="inner">
        <h1>{props.header}</h1>
      </div>
      {props.children}
      <div className="hero-overlay hero-background hero-fixed" />
      <div className="hero-image hero-background hero-fixed" />
    </div>
  )
}

export default Hero
