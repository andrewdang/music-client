import React from "react"

const ConnectWithUsCTA = props => {
  return (
    <div className="section linkout section-link">
      <h1>{props.header}</h1>
      <a className="box-button purple-button" href={`mailto:${props.buttonLink}`}>
        {props.buttonText}
      </a>
    </div>
  )
}

export default ConnectWithUsCTA
