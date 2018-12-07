import React, { Fragment } from "react"

const ButtonStates = () => {
  return (
    <Fragment>
      <span className="default" data-carousel-prevent-default="true" />
      <span className="hover" data-carousel-prevent-default="true" />
      <span className="active" data-carousel-prevent-default="true" />
    </Fragment>
  )
}

export default ButtonStates
