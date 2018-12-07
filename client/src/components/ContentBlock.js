import React from "react"

const ContentBlock = props => {
  return (
    <div className="section-inner">
      <div className="section-content section-small">
        <h1 className={`color-${props.headerColor}`}>{props.header}</h1>

        <div className="rainbow rainbow-center" />
        <p>{props.body}</p>
      </div>

      {props.children}
    </div>
  )
}

export default ContentBlock
