import React from "react"

const Accordion = props => {
  const { buttonText, content, active } = props

  const toggle = e => {
    e.preventDefault()
    props.setActiveAccordion(props.id, !props.active)
  }

  return (
    <div className={`accordion-list-item accordion-btn ${active ? "expand" : ""}`}>
      <button onClick={e => toggle(e)} className={`${active ? "service-selected" : ""}`}>
        {buttonText}
      </button>

      <div className="accordion-list-description">{content}</div>
    </div>
  )
}

export default Accordion
