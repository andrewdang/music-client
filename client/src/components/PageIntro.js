import React, { Component } from "react"
// import { styleHeader } from "../helpers";

class PageIntro extends Component {
  // componentDidMount() {
  //   if (this.sectionHeader) document.getElementById("container").onscroll = styleHeader;
  // }

  render() {
    const { pageClass, headerColor, header, content, children } = this.props

    return (
      <div
        className={`section section-${pageClass} sub-hero`}
        ref={ref => (this.sectionHeader = ref)}
      >
        <div className="section-inner">
          <div className="section-content">
            <h1 className={`color-${headerColor}`}>{header}</h1>
            <div className="rainbow rainbow-center" />
            <p className="section-header-p">
              {content}
              {children}
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default PageIntro
