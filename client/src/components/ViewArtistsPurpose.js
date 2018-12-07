import React from "react"

const ViewArtistsPurpose = () => {
  return (
    <div className="section section-linkouts">
      <div className="columns">
        <div className="column">
          <div className="section-artists section-linkout">
            <div className="inner vertical-center">
              <a
                className="box-button translucent-button-black"
                data-bypass="true"
                href="/artists"
                style={{ borderColor: "#8A4FAB" }}
              >
                View Artists
              </a>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="section-purpose section-linkout">
            <div className="inner vertical-center">
              <a
                className="box-button translucent-button-black"
                data-bypass="true"
                href="/our-purpose"
                style={{ borderColor: "#37B480" }}
              >
                Our Purpose
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ViewArtistsPurpose
