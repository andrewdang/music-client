import React from "react"
import { stripProtocol } from "../helpers"
import { formatMoney } from "accounting"

const NonprofitItem = props => {
  const imgUrl = `url('../assets/nonprofits/${props.imgFile}')`

  return (
    <div className="nonprofit-logo" style={{ backgroundImage: imgUrl }}>
      <div className="nonprofit-info">
        <div className="nonprofit-info-inner">
          <strong>Donated {formatMoney(props.donationAmount, { precision: 0 })}</strong>
          <p>{props.description}</p>
          <a href={props.url} target="_blank" rel="noopener noreferrer">
            {stripProtocol(props.url)}
          </a>
        </div>
      </div>
    </div>
  )
}

export default NonprofitItem
