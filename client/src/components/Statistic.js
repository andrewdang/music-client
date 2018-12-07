import React from "react"
import { formatMoney } from "accounting"

const Statistic = props => {
  return (
    <div className="column">
      <h1>
        <span>{formatMoney(props.number, { precision: 0 })}</span>
      </h1>

      <p>{props.name}</p>
    </div>
  )
}

export default Statistic
