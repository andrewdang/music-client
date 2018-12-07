import React from "react"

const CallToActionButton = props => {
  return (
    <div className="linkout">
      <a href={props.url} className="box-button purple-button" data-bypass={props.bypass}>
        {props.text}
      </a>
    </div>
  )
}

CallToActionButton.defaultProps = {
  bypass: false
}

export default CallToActionButton
